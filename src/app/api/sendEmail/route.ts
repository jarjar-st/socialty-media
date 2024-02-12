import nodemailer from 'nodemailer'
import axios from 'axios';

export async function POST(
  req: Request,
  res: Response
) {
  let passedValue = await new Response(req.body).text();
  let bodyreq = JSON.parse(passedValue);
  const { fullName, email, phoneNumber, message, plan, captcha } = bodyreq;
  console.log(bodyreq);

    // Verificar el valor del reCAPTCHA con la API de verificación de reCAPTCHA
    const secretKey = "6LcqPnApAAAAAKIHIw4Ot5sYCZzzLAsfdOBohgTq";
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;
    const response = await axios.post(verifyUrl);
    const body = response.data;
  
    // Si la verificación falla, enviar una respuesta de error
    if (body.success !== true) {
      return Response.json({ message: 'Captcha verification failed' });
    }

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
    // to: "josue_benjamin12@hotmail.com",
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
      // to: 'josue_benjamin12@hotmail.com',
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
    return Response.json({ message: 'Bad - GET' });
  }
}