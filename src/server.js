const port = 3000;

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello');
});
app.get('/email', (req, res) => {
  res.send('email');
});
app.post('/email', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'morganpeck99@gmail.com',
      pass: 'tanner11!',
    },
  });
  const mailOptions = {
    from: req.name,
    to: 'mopeck99@gmail.com',
    subject: req.subject,

    html: '<p>This is a test email</p>',
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
  res.redirect('http://localhost:8080/contact?success="Email Sent');
});

app.listen(port);
