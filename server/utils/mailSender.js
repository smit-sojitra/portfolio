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
        return info;
    } catch (error) {
        console.log('Error sending mail:', error);
    }

}
module.exports = mailSender;