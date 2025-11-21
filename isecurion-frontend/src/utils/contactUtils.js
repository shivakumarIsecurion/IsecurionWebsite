// Email sending utility with logging

export const sendContactEmail = async (formData) => {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to send email');
        }

        return {
            success: true,
            message: data.message,
        };
    } catch (error) {
        console.error('Contact form submission error:', error);
        return {
            success: false,
            error: error.message,
        };
    }
};

// Validate form data before sending
export const validateContactForm = (formData) => {
    const errors = {};

    // Name validation
    if (!formData.name || formData.name.trim().length === 0) {
        errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email || formData.email.trim().length === 0) {
        errors.email = 'Email is required';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
    }

    // Message validation
    if (!formData.message || formData.message.trim().length === 0) {
        errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }

    // Phone validation (optional, but if provided, should be valid)
    if (formData.phone && formData.phone.trim().length > 0) {
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            errors.phone = 'Invalid phone format';
        }
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
