# Pre Law Society
![2020-09-18-13-18-16-Trim](https://user-images.githubusercontent.com/47621785/93642738-6f4cfc80-f9b3-11ea-8821-4394af1e88b1.gif)

This is a real-world website developed for the official Pre-Law Society student organization at [CSUDH](https://www.csudh.edu/).

### Feel free to use this as a template for your next project!

## 💻 Installation

Download this repo:
```bash
$ git clone https://github.com/Lucidreline/pre-law-society.git
```

Install dependencies:
```bash
$ npm install
```

Start it up:
```bash
$ npm run start
```

Create a config file for env vars:
```bash
$ cd pre-law-society

$ touch ./config/default.json
```

Inside of default.json, add the following env vars:
```json
{
  "SendGridKey": "Your-Api-Key",
  "ClientEmail": "Your-email",
  "DevEmail": "The-Email-Registered-On-SendGrid",
  "Port": 3010
}
```
You can obtain a SendGrid api key from [SendGrid](https://sendgrid.com).

The Client email could be any valid email you would like to send emails to. 
The website has a contact page so this is how you will receive the user's message.

The dev email is the email that you registered with SendGrid.

The port can be any available port. I commonly use 3000 or 8080.

<br/>

## 👔 Tailor it for you

Once you open the project folder you can start to add in your projects and information.

To add your own photos, members, events, etc for your version of the website, navigate to the following folder:
```bash
./client/src/data
```

In this folder, you can find the different types of data I have on the website. They are just JavaScript objects. All you need to do is delete the information and replace it with your information.
You can add or remove as many elements as you want, the website will recognize the change and reflect it. it will also stay responsive and neatly sort itself.

<br/>

## 🙏 Attribution
I want to give credit to [Adriana Jimenez](https://csudhprelawsociety.com/members/0) for helping with the design the website.

<br/>

## ⚖ License
This repo is covered by the MIT License.

