import nodemailer from 'nodemailer';

export const sendContactEmail = async (req, res) => {
  const { name, email, vision } = req.body;

  if (!name || !email || !vision) {
    return res.status(400).json({ error: 'Please provide name, email, and vision (message).' });
  }

  // Check if credentials are set
  if (!process.env.EMAIL_USER || process.env.EMAIL_USER.includes("your_email") || !process.env.EMAIL_PASS) {
    console.warn("⚠️ Warning: EMAIL_USER and EMAIL_PASS environment variables are not configured in .env!");
    return res.status(200).json({ 
      success: true, 
      isMock: true, 
      message: 'Validation passed! Configure EMAIL_USER and EMAIL_PASS in your .env for real emails.' 
    });
  }

  try {
    // 1. Create a transporter using standard SMTP details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // 2. Configure the email details with a premium HTML template
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Vision from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nVision:\n${vision}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; color: #1e293b; line-height: 1.6; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #f1f5f9; padding-bottom: 15px; margin-top: 0; font-family: 'Cabinet Grotesk', 'Inter', sans-serif; font-weight: 900; font-style: italic; letter-spacing: -0.02em;">New Vision Proposal</h2>
          <p style="margin: 15px 0;"><strong style="color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Prospect Name:</strong><br><span style="font-size: 15px; font-weight: bold; color: #0f172a;">${name}</span></p>
          <p style="margin: 15px 0;"><strong style="color: #64748b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em;">Email Address:</strong><br><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 15px; font-weight: bold;">${email}</a></p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-top: 25px; border-left: 4px solid #8b5cf6; box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);">
            <strong style="color: #64748b; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; display: block; margin-bottom: 8px;">Project Vision:</strong>
            <p style="margin: 0; color: #334155; font-size: 14px; white-space: pre-line; line-height: 1.6;">${vision}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-top: 30px; margin-bottom: 20px;" />
          <p style="font-size: 11px; color: #94a3b8; margin: 0; text-align: center; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">Sent Securely via Nodemailer • Portfolio Engine</p>
        </div>
      `,
    };

    // 3. Dispatch the mail
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Mail sent successfully!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ error: 'Failed to send mail. Please check your SMTP configuration.' });
  }
};
