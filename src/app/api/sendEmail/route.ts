import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export async function POST(
  req: Request,
  res: Response
) {
  console.log("si entra!!!!!");
  let passedValue = await new Response(req.body).text();
  let bodyreq = JSON.parse(passedValue);
  const { fullName, email, phoneNumber, message, plan } = bodyreq;
  console.log(bodyreq);

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

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Email sent: ' + info.response);
          resolve(info);
        }
      });
    });
    return Response.json({ message: 'Hello - GET' });
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'BAd - GET' });
  }
}