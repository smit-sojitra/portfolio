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
            html: `<div className='flex flex-col items-center justify-center gap-4'>
                        <p>Hello, ${data.firstName}  ${" "} ${data.lastName}</p>
                        <p>I will reach you within 24 hours</p>                        
                    </div>`,
        })
        return info;
    } catch (error) {
        console.log('Error sending mail:', error);
    }

}
module.exports = mailSender;