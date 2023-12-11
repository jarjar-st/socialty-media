import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { fullName, email, phoneNumber, message, plan } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'mail.socialtymedia.com',
        port: 465,
        secure: true, // true para 465, false para otros puertos
        auth: {
          user: 'contact@socialtymedia.com', // tu dirección de correo
          pass: 'SocialtyMedia2023@' // tu contraseña
        }
      });

    const mailOptions = {
      from: 'contact@socialtymedia.com',
      to: 'josue_benjamin12@hotmail.com',
      subject: 'New Contact Form Submission',
      text: `Full Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}\nPlan: ${plan}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).send('Failed to send email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  } else {
    res.status(405).send('error');
  }
}