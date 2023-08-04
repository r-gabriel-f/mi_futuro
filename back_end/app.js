const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.post('/send-email', (req, res) => {
  const { nombre, telefono, from, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'robertgabrielxd2@gmail.com',
      pass: 'wbixkwjocsblzkzt'
    }
  });

  const mailOptions = {
    from: 'robertgabrielxd2@gmail.com',
    to: 'robertgabrielxd2@gmail.com',
    subject: subject,
    telefono: telefono,
    text: `Nombre: ${nombre}\nTelefono: ${telefono}\nEmail: ${from}\nMensaje: ${text}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.send('Correo electrónico enviado exitosamente');
    }
  });
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
