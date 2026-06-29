const nodemailer = require("nodemailer");

const sendEmail = async ({
  email,
  subject,
  html,
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
  },
});

  await transporter.sendMail({
    from: `"Burdwan Scan Centre" <${process.env.EMAIL_USER}>`,
    to: email,
    subject,
    html,
  });
};

module.exports = sendEmail;