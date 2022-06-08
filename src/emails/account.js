const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'talhaejazup@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
        //html: ''
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'talhaejazup@gmail.com',
        subject: 'Sorry to see you go!',
        text: `GoodBye, ${name}. I hope to see you back sometime soon.`
        //html: ''
    })
}

// sgMail.send({ 
//     to: 'talhaejazup@gmail.com',
//     from: 'talhaejazup@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you.'
// })

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}