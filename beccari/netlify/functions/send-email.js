const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const params = new URLSearchParams(event.body);
  const nome = params.get('nome') || '';
  const email = params.get('email') || '';
  const telefono = params.get('telefono') || '';
  const messaggio = params.get('messaggio') || '';

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Residenze Beccari" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Nuova richiesta da ${nome} - Residenze Beccari`,
      html: `
        <h2>Nuova richiesta di contatto</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Messaggio:</strong> ${messaggio}</p>
      `,
    });

    return {
      statusCode: 302,
      headers: { Location: '/success.html' },
      body: '',
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: 'Errore invio email' };
  }
};
