const transporter = require("../config/nodemailer");
require('dotenv').config();
const email = process.env.MAIL_USER;
const mailSender = async (data) => {
    try {
        let info = await transporter.sendMail({
            from: 'Smit',
            to: email,
            subject: 'Portfolio Enquiry',
            html: `<div className='flex flex-col items-center justify-center gap-4'>
                        <p>${data.firstName}  ${" "} ${data.lastName}</p>
                        <p>Email:-${data.email}</p>
                        <p>Conatct No:-${data.contactNumber}</p>
                        <p>Description:-${data.description}</p>
                    </div>`,
        })
        let info1 = await transporter.sendMail({
            from: '"Smit Sojitra" <smitsojitra@email.com>',
            to: data.email,
            subject: 'Portfolio Enquiry',
            html: `<div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h2 style="color: #333;">Hello ${data.firstName} ${data.lastName},</h2>
            <p style="color: #555;">Thank you for reaching out through my portfolio contact form.</p>
            <p style="color: #555;">I will get back to you within 24 hours.</p>
            <p style="color: #555;">If you have any urgent queries, feel free to reply to this email.</p>
            <p style="color: #777;">Best regards,<br>Smit Sojitra</p>
        </div>`,
        })
        return info;
    } catch (error) {
        console.log('Error sending mail:', error);
    }

}
module.exports = mailSender;