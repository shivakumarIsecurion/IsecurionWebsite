// Rate limiting helper to prevent spam
const submissions = new Map();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_SUBMISSIONS = 3; // Max 3 submissions per minute per IP

export function checkRateLimit(ip) {
    const now = Date.now();

    if (!submissions.has(ip)) {
        submissions.set(ip, []);
    }

    const userSubmissions = submissions.get(ip);

    // Remove old submissions outside the window
    const recentSubmissions = userSubmissions.filter(
        (time) => now - time < RATE_LIMIT_WINDOW
    );

    if (recentSubmissions.length >= MAX_SUBMISSIONS) {
        return {
            allowed: false,
            retryAfter: RATE_LIMIT_WINDOW - (now - recentSubmissions[0]),
        };
    }

    // Add current submission time
    recentSubmissions.push(now);
    submissions.set(ip, recentSubmissions);

    return { allowed: true };
}

// Get client IP from request
export function getClientIP(request) {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() :
        request.headers.get('x-real-ip') ||
        'unknown';
    return ip;
}

// Log email submission for audit trail
export function logSubmission(formData, status, error = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
        timestamp,
        email: formData.email,
        name: formData.name,
        company: formData.company || 'N/A',
        status, // 'success' or 'failed'
        error: error || null,
    };

    // In production, you'd save this to a database
    console.log('[Contact Form Submission]', logEntry);

    return logEntry;
}

// Sanitize input to prevent XSS
export function sanitizeInput(input) {
    if (typeof input !== 'string') return '';

    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .trim();
}

// Validate phone number format
export function isValidPhone(phone) {
    if (!phone || phone.trim().length === 0) return true; // Optional field

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Validate email address
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Format phone number for display
export function formatPhoneNumber(phone) {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}
