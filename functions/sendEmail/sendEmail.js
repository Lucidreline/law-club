// npm install
// change config to .env
// test post request

const sgMail = require("@sendgrid/mail")
require("dotenv").config()

const handler = async (event) => {
  try {
    if (event.httpMethod != "POST")
      return { statusCode: 500, body: "Only accepting POST requests" }

    const { name, email, msg } = JSON.parse(event.body)

    sgMail.setApiKey(process.env.SendGridKey)
    const emailToSend = {
      to: process.env.ClientEmail,
      from: process.env.DevEmail,
      subject: "Law Club Form",
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n ${msg}`,
    }
    sgMail.send(emailToSend).then((result) => console.log("done: " + result))

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
