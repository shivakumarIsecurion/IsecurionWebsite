// Email templates for contact form

export const customerEmailTemplate = (name, company) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Confirmation</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #2045A4 0%, #0C1A3E 100%);
          color: white;
          padding: 40px 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
        }
        .header p {
          margin: 10px 0 0 0;
          font-size: 14px;
          opacity: 0.9;
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 18px;
          margin-bottom: 20px;
          color: #0C1A3E;
          font-weight: 600;
        }
        .message {
          font-size: 16px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 25px;
        }
        .highlight {
          background: #E8F0FE;
          border-left: 4px solid #2045A4;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
        }
        .quote {
          font-style: italic;
          color: #666;
          border-left: 4px solid #2045A4;
          padding-left: 15px;
          margin: 20px 0;
        }
        .footer {
          background: #f0f0f0;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #999;
          border-top: 1px solid #ddd;
        }
        .button {
          display: inline-block;
          background: #2045A4;
          color: white;
          padding: 12px 30px;
          border-radius: 4px;
          text-decoration: none;
          margin: 20px 0;
          font-weight: 600;
        }
        .button:hover {
          background: #0C1A3E;
        }
        .contact-info {
          background: #fff;
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 4px;
          margin: 20px 0;
        }
        .contact-info p {
          margin: 8px 0;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Contact Confirmation</h1>
          <p>We've received your message</p>
        </div>
        
        <div class="content">
          <div class="greeting">Hi ${name},</div>
          
          <div class="message">
            Thank you for reaching out to us! We appreciate your interest in ISEC's security solutions.
          </div>
          
          <div class="highlight">
            Your inquiry has been successfully submitted. Our specialist team will review your message and get back to you shortly.
          </div>
          
          <div class="message">
            <strong>What happens next?</strong><br>
            Our team typically responds within 24-48 business hours. We'll carefully review your requirements and contact you with the most suitable solution for your organization.
          </div>
          
          <div class="quote">
            "We Don't Just Protect Systems — We Protect Trust."
          </div>
          
          <div class="message">
            In the meantime, feel free to explore more about our services and expertise on our website.
          </div>
          
          <center>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://isec.com'}" class="button">Visit Our Website</a>
          </center>
          
          <div class="contact-info">
            <p><strong>Quick Reference:</strong></p>
            <p>📧 Email: support@isec.com</p>
            <p>🌐 Website: isec.com</p>
            <p>⏱️ Response Time: 24-48 hours</p>
          </div>
        </div>
        
        <div class="footer">
          <p>&copy; 2025 ISEC. All rights reserved. We protect trust.</p>
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const adminEmailTemplate = (formData) => {
    const { name, email, phone, company, message } = formData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 700px;
          margin: 0 auto;
          background: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #2045A4 0%, #0C1A3E 100%);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
        .alert {
          background: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 15px;
          margin: 20px;
          border-radius: 4px;
          font-weight: 600;
          color: #856404;
        }
        .content {
          padding: 30px 20px;
        }
        .form-data {
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .form-field {
          margin-bottom: 15px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        .form-field:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .field-label {
          font-weight: 600;
          color: #2045A4;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .field-value {
          font-size: 16px;
          color: #333;
          word-break: break-word;
        }
        .actions {
          background: #f0f0f0;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #ddd;
        }
        .action-button {
          display: inline-block;
          background: #2045A4;
          color: white;
          padding: 10px 25px;
          border-radius: 4px;
          text-decoration: none;
          margin: 0 5px;
          font-weight: 600;
          font-size: 14px;
        }
        .footer {
          background: #f9f9f9;
          padding: 15px;
          text-align: center;
          font-size: 11px;
          color: #999;
          border-top: 1px solid #ddd;
        }
        .timestamp {
          color: #999;
          font-size: 12px;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Contact Form Submission</h1>
        </div>
        
        <div class="alert">
          ⚠️ A new inquiry has been received and requires attention
        </div>
        
        <div class="content">
          <div class="form-data">
            <div class="form-field">
              <div class="field-label">👤 Full Name</div>
              <div class="field-value">${name || 'N/A'}</div>
            </div>
            
            <div class="form-field">
              <div class="field-label">📧 Email Address</div>
              <div class="field-value">
                <a href="mailto:${email}">${email || 'N/A'}</a>
              </div>
            </div>
            
            <div class="form-field">
              <div class="field-label">📱 Phone Number</div>
              <div class="field-value">
                <a href="tel:${phone}">${phone || 'N/A'}</a>
              </div>
            </div>
            
            <div class="form-field">
              <div class="field-label">🏢 Company</div>
              <div class="field-value">${company || 'N/A'}</div>
            </div>
            
            <div class="form-field">
              <div class="field-label">💬 Message</div>
              <div class="field-value" style="white-space: pre-wrap; max-height: 300px; overflow-y: auto;">
                ${message || 'N/A'}
              </div>
            </div>
          </div>
          
          <div class="timestamp">
            <strong>Submitted:</strong> ${new Date().toLocaleString()}
          </div>
        </div>
        
        <div class="actions">
          <a href="mailto:${email}?subject=Re: Your ISEC Contact Form" class="action-button">Reply</a>
          <a href="#" class="action-button">View in Dashboard</a>
        </div>
        
        <div class="footer">
          <p>This is an automated notification. Do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
