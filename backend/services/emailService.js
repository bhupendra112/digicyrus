const nodemailer = require('nodemailer');

// Create transporter
// For production, configure with actual SMTP credentials
// For development/testing, you can use services like Mailtrap, Ethereal, or SendGrid
const createTransporter = async () => {
    // If SMTP credentials are provided, use them
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        return nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    }

    // For development, use Ethereal Email (testing service)
    // Creates a test account and logs credentials to console
    try {
        const testAccount = await nodemailer.createTestAccount();
        console.log('📧 Ethereal Email Test Account Created:');
        console.log('   User:', testAccount.user);
        console.log('   Pass:', testAccount.pass);
        console.log('   View emails at: https://ethereal.email');

        return nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
    } catch (error) {
        console.error('Failed to create Ethereal test account:', error);
        throw new Error('Email service configuration required. Please set up SMTP credentials in .env file.');
    }
};

const sendContactEmail = async ({ name, email, company, service, message }) => {
    try {
        const transporter = await createTransporter();

        // Email to admin/company
        const adminEmail = {
            from: process.env.FROM_EMAIL || 'noreply@digicyrus.com',
            to: process.env.ADMIN_EMAIL || 'hello@digicyrus.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from the Digi Cyrus website contact form.</small></p>
      `,
            text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Service Interest: ${service}
        
        Message:
        ${message}
      `,
        };

        // Optional: Auto-reply to sender
        const autoReplyEmail = {
            from: process.env.FROM_EMAIL || 'noreply@digicyrus.com',
            to: email,
            subject: 'Thank you for contacting Digi Cyrus',
            html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 24 hours, Monday through Friday.</p>
        <p>In the meantime, feel free to explore our website to learn more about how we can help build, automate, and scale your digital business.</p>
        <p>Best regards,<br>The Digi Cyrus Team</p>
        <hr>
        <p><small>This is an automated response. Please do not reply to this email.</small></p>
      `,
            text: `
        Thank you for reaching out!
        
        Hi ${name},
        
        We've received your message and will get back to you within 24 hours, Monday through Friday.
        
        In the meantime, feel free to explore our website to learn more about how we can help build, automate, and scale your digital business.
        
        Best regards,
        The Digi Cyrus Team
      `,
        };

        // Send admin notification
        const adminInfo = await transporter.sendMail(adminEmail);
        console.log('Admin notification email sent');
        // For Ethereal Email, log the preview URL
        if (process.env.NODE_ENV !== 'production' && !process.env.SMTP_HOST) {
            console.log('Preview URL:', nodemailer.getTestMessageUrl(adminInfo));
        }

        // Send auto-reply (optional, can be disabled)
        if (process.env.ENABLE_AUTO_REPLY !== 'false') {
            try {
                const autoReplyInfo = await transporter.sendMail(autoReplyEmail);
                console.log('Auto-reply email sent');
                // For Ethereal Email, log the preview URL
                if (process.env.NODE_ENV !== 'production' && !process.env.SMTP_HOST) {
                    console.log('Auto-reply Preview URL:', nodemailer.getTestMessageUrl(autoReplyInfo));
                }
            } catch (autoReplyError) {
                console.error('Auto-reply email error (non-critical):', autoReplyError);
            }
        }

        return { success: true };
    } catch (error) {
        console.error('Email service error:', error);
        throw error;
    }
};

module.exports = {
    sendContactEmail,
};
