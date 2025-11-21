import transporter from '@/utils/mailer';
import { customerEmailTemplate, adminEmailTemplate } from '@/utils/emailTemplates';
import { checkRateLimit, getClientIP, logSubmission, sanitizeInput, isValidEmail, isValidPhone } from '@/utils/emailSecurity';

export async function POST(request) {
    try {
        // Check rate limiting
        const clientIP = getClientIP(request);
        const rateCheck = checkRateLimit(clientIP);

        if (!rateCheck.allowed) {
            return Response.json(
                { success: false, error: 'Too many submissions. Please try again later.' },
                { status: 429 }
            );
        }

        let { name, email, phone, company, message } = await request.json();

        // Sanitize inputs
        name = sanitizeInput(name);
        email = sanitizeInput(email);
        phone = sanitizeInput(phone);
        company = sanitizeInput(company);
        message = sanitizeInput(message);

        // Validation
        if (!name || !email || !message) {
            logSubmission({ name, email, phone, company, message }, 'failed', 'Missing required fields');
            return Response.json(
                { success: false, error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(email)) {
            logSubmission({ name, email, phone, company, message }, 'failed', 'Invalid email format');
            return Response.json(
                { success: false, error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Validate phone if provided
        if (phone && !isValidPhone(phone)) {
            logSubmission({ name, email, phone, company, message }, 'failed', 'Invalid phone format');
            return Response.json(
                { success: false, error: 'Invalid phone format' },
                { status: 400 }
            );
        }

        const formData = { name, email, phone, company, message };

        // Send email to customer
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Contact Confirmation - ISEC',
            html: customerEmailTemplate(name, company),
        });

        // Send email to admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL || 'admin@isec.com',
            subject: `New Contact Form Submission from ${name}`,
            html: adminEmailTemplate(formData),
        });

        logSubmission(formData, 'success');

        return Response.json(
            {
                success: true,
                message: 'Email sent successfully',
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email sending error:', error);
        logSubmission({ email: 'unknown' }, 'failed', error.message);

        return Response.json(
            {
                success: false,
                error: error.message || 'Failed to send email',
            },
            { status: 500 }
        );
    }
}
