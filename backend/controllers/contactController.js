const emailService = require('../services/emailService');

const submitContact = async (req, res) => {
    try {
        const { name, email, company, service, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and message are required fields',
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address',
            });
        }

        // Send email
        try {
            await emailService.sendContactEmail({
                name,
                email,
                company: company || 'Not provided',
                service: service || 'Not specified',
                message,
            });

            res.status(200).json({
                success: true,
                message: 'Contact form submitted successfully',
            });
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            // Still return success to user, but log the error
            res.status(200).json({
                success: true,
                message: 'Contact form submitted successfully',
                note: 'Email notification may be delayed',
            });
        }
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request',
        });
    }
};

module.exports = {
    submitContact,
};
