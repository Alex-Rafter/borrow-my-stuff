var nodemailer = require('nodemailer');

function mailMe(param) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alexrafteremail@gmail.com',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: 'alexrafteremail@gmail.com',
    to: 'alexrafteremail@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `${param}: That was easy!`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = mailMe