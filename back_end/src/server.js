const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const http = require('http');
app.use(cors());
app.use(express.json());
app.post('/send-email', (req, res) => {
  const { nombre, telefono, from, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: subject,
    telefono: telefono,
    text: `Nombre: ${nombre}\nTelefono: ${telefono}\nEmail: ${from}\nMensaje: ${text}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      res.send('Correo electrónico enviado exitosamente');
    }
  });
});


const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
