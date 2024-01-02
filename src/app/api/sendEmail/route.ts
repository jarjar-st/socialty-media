import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export async function POST(
  req: Request,
  res: Response
) {
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
    to: 'hello@socialtymedia.com',
    subject: 'New Contact From Socialty Media',
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
    
    const forwardMailOptions = {
      ...mailOptions,
      // to: 'ingridcho@socialtymedia.com', 
      to:'ingridcho@socialtymedia.com',
    };
  
    await new Promise((resolve, reject) => {
      transporter.sendMail(forwardMailOptions, (error, info) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Email forwarded: ' + info.response);
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