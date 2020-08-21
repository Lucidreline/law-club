const express = require('express')
const config = require('config')
const cors = require('cors')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

const app = express()

app.use(bodyParser.json())

// allows us to only recieve requests from a list of origins
app.use(cors(require('./config/cors')))

app.post('/email', (req, res) => {
  sgMail.setApiKey(config.get('SendGridKey'));

  const { name, email, msg } = req.body;
  const emailToSend = {
    to: config.get('ClientEmail'),
    from: 'mcas@manuelc.me',
    subject: 'PLS Website Message',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`
  }
  sgMail.send(emailToSend);
})

app.listen(config.get('Port'), () => console.log(`Backend online on port ${config.get('Port')}`))