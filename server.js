const express = require("express")
const config = require("config")
const cors = require("cors")
const bodyParser = require("body-parser")
const sgMail = require("@sendgrid/mail")

const path = require("path")

const app = express()

app.use(bodyParser.json())

// allows us to only recieve requests from a list of origins
app.use(cors(require("./config/cors")))

app.post("/email", async (req, res) => {
  try {
    sgMail.setApiKey(config.get("SendGridKey"))
    const { name, email, msg } = req.body
    const emailToSend = {
      to: config.get("ClientEmail"),
      from: config.get("DevEmail"),
      subject: "PLS Website Message",
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n ${msg}`,
    }
    console.log(await sgMail.send(emailToSend))
  } catch (err) {
    return console.log(err)
  }
})

// serve static assets in prod
app.use(express.static("client/build"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app.listen(config.get("Port"), () =>
  console.log(`Backend online on port ${config.get("Port")}`)
)
