// import type { NextApiRequest, NextApiResponse } from 'next'
// import nodemailer from 'nodemailer'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { fullName, email, phoneNumber, message, plan } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-password'
//       }
//     });

//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: 'recipient-email@gmail.com',
//       subject: 'New Contact Form Submission',
//       text: `Full Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}\nPlan: ${plan}`
//     };

//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log(error);
//         res.status(500).send('Failed to send email');
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.status(200).send('Email sent successfully');
//       }
//     });
//   } else {
//     res.status(405).send('error');
//   }
// }