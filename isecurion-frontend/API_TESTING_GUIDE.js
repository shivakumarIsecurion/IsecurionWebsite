// API Testing Examples for Contact Form

// ============================================
// Test 1: Valid Form Submission
// ============================================
const validSubmission = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Corporation",
    message: "I'm interested in learning more about your security solutions for enterprise environments."
};

// Test with curl (Windows PowerShell)
/*
$body = @{
    name = "John Doe"
    email = "john@example.com"
    phone = "+1 (555) 123-4567"
    company = "Acme Corporation"
    message = "I'm interested in learning more about your security solutions."
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/contact" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body
*/

// ============================================
// Test 2: JavaScript Fetch (Browser Console)
// ============================================
/*
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "(555) 987-6543",
    company: "TechStart Inc",
    message: "We need penetration testing services for our new infrastructure."
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
*/

// ============================================
// Test 3: Invalid Email
// ============================================
const invalidEmail = {
    name: "Test User",
    email: "not-an-email",  // Invalid!
    phone: "",
    company: "Test Co",
    message: "This should fail validation."
};

// Expected Response: 400 Bad Request
// { success: false, error: "Invalid email format" }

// ============================================
// Test 4: Missing Required Field
// ============================================
const missingField = {
    name: "Test User",
    // Missing email!
    phone: "(555) 123-4567",
    company: "Test Co",
    message: "Message is here but email is missing."
};

// Expected Response: 400 Bad Request
// { success: false, error: "Name, email, and message are required" }

// ============================================
// Test 5: Rate Limiting (Spam Prevention)
// ============================================
/*
// Make 4 requests in quick succession
for (let i = 0; i < 4; i++) {
  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: `User ${i}`,
      email: `user${i}@example.com`,
      phone: "",
      company: "",
      message: "Test message"
    })
  }).then(r => r.json()).then(d => console.log(`Request ${i}:`, d));
}

// Results:
// Request 0: { success: true, message: "Email sent successfully" }
// Request 1: { success: true, message: "Email sent successfully" }
// Request 2: { success: true, message: "Email sent successfully" }
// Request 3: { success: false, error: "Too many submissions. Please try again later." }
*/

// ============================================
// Test 6: XSS Prevention (Input Sanitization)
// ============================================
const xssAttempt = {
    name: '<script>alert("XSS")</script>',  // Will be sanitized
    email: "test@example.com",
    phone: "",
    company: "Test Co",
    message: '<img src=x onerror="alert(\'XSS\')">'  // Will be sanitized
};

// Sanitization converts to:
// name: "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"
// message: "&lt;img src=x onerror=&quot;alert(&#x27;XSS&#x27;)&quot;&gt;"

// ============================================
// Test 7: Using Postman
// ============================================
/*
POST http://localhost:3000/api/contact
Content-Type: application/json

{
  "name": "Postman Test",
  "email": "postman@example.com",
  "phone": "+1-555-123-4567",
  "company": "Testing Co",
  "message": "Testing the API with Postman"
}
*/

// ============================================
// Test 8: Using curl (Linux/Mac/Windows)
// ============================================
/*
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Curl Test",
    "email": "curl@example.com",
    "phone": "+1 (555) 123-4567",
    "company": "Curl Testing",
    "message": "Testing with curl command"
  }'
*/

// ============================================
// Test 9: Long Message (Testing TextArea)
// ============================================
const longMessage = {
    name: "Detailed User",
    email: "detailed@example.com",
    phone: "",
    company: "Enterprise Corp",
    message: `
    We are looking for comprehensive security solutions that include:
    1. Penetration testing
    2. Vulnerability assessment
    3. Security auditing
    4. Compliance consulting
    
    Our company handles sensitive financial data and we need enterprise-grade security.
    Please provide a quote for annual security services.
    
    We are available for a call next week to discuss requirements.
  `
};

// ============================================
// Test 10: Valid Phone Formats
// ============================================
const phoneFormats = [
    "+1 (555) 123-4567",      // ✓ Valid with space
    "+1-555-123-4567",        // ✓ Valid with dash
    "5551234567",             // ✓ Valid without formatting
    "(555) 123-4567",         // ✓ Valid with parens
    "555.123.4567",           // ✓ Valid with dots
    "+1234567890",            // ✓ Valid international
    "invalid",                // ✗ Invalid
    "+1 555",                 // ✗ Too short
];

// ============================================
// Test 11: React Testing Component
// ============================================
/*
// Copy this to test in React
import { useState } from 'react';

export function ContactFormTest() {
  const [result, setResult] = useState(null);

  const handleTest = async (testData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testData),
      });
      const data = await response.json();
      setResult({
        status: response.status,
        data
      });
    } catch (error) {
      setResult({ error: error.message });
    }
  };

  return (
    <div>
      <button onClick={() => handleTest({
        name: "Test User",
        email: "test@example.com",
        phone: "",
        company: "Test Co",
        message: "Test message"
      })}>
        Test Valid Submission
      </button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
*/

// ============================================
// Expected Responses
// ============================================

// Success (200):
/*
{
  "success": true,
  "message": "Email sent successfully"
}
*/

// Bad Request (400):
/*
{
  "success": false,
  "error": "Invalid email format"
}
*/

// Too Many Requests (429):
/*
{
  "success": false,
  "error": "Too many submissions. Please try again later."
}
*/

// Server Error (500):
/*
{
  "success": false,
  "error": "Failed to send email"
}
*/

// ============================================
// Console Logging
// ============================================

// When testing, check console logs for:
// [Contact Form Submission] { timestamp, email, name, company, status, error }

// Example successful submission log:
/*
[Contact Form Submission] {
  timestamp: '2025-11-18T10:30:00.000Z',
  email: 'john@example.com',
  name: 'John Doe',
  company: 'Acme Corp',
  status: 'success',
  error: null
}
*/

// Example failed submission log:
/*
[Contact Form Submission] {
  timestamp: '2025-11-18T10:31:00.000Z',
  email: 'invalid-email',
  name: 'Test User',
  company: 'Test Co',
  status: 'failed',
  error: 'Invalid email format'
}
*/

// ============================================
// Load Testing
// ============================================

async function loadTest() {
    const results = {
        success: 0,
        failed: 0,
        rateLimited: 0,
        totalTime: 0
    };

    const startTime = Date.now();

    for (let i = 0; i < 10; i++) {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `Load Test User ${i}`,
                    email: `loadtest${i}@example.com`,
                    phone: "",
                    company: "Load Test",
                    message: "Load test message"
                })
            });

            const data = await response.json();

            if (response.status === 429) {
                results.rateLimited++;
            } else if (data.success) {
                results.success++;
            } else {
                results.failed++;
            }
        } catch (error) {
            results.failed++;
        }
    }

    results.totalTime = Date.now() - startTime;
    console.log('Load Test Results:', results);
    // { success: 3, failed: 0, rateLimited: 7, totalTime: 2500 }
}

// Run load test:
// loadTest();

export {
    validSubmission,
    invalidEmail,
    missingField,
    xssAttempt,
    longMessage,
    phoneFormats,
    loadTest
};
