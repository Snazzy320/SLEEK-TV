const nodemailer = require("nodemailer")

const sendWelcomeEmail = async ( firstName, userEmail, emailSubject, url ) =>{
    try {

        // create Transport
        let mailerTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: `${process.env.EMAIL}`,
                pass: `${process.env.EMAIL_PASSWORD}`
            }
        })

        // Create email details to send
        let mailDetails = {
            from: `${process.env.EMAIL}`,
            to: userEmail,
            subject: emailSubject,
            html:`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to SleekTV</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: linear-gradient(145deg, rgba(6, 6, 6, 1) 0%, rgba(88, 0, 0, 1) 100%);
                        color: #ffffff;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        text-align: center;
                    }
                    .logo {
                        margin: 20px 0;
                    }
                    .logo img {
                        width: 150px;
                    }
                    h1 {
                        color: #FFf;
                    }
                    .content {
                        background: rgba(255, 255, 255, 0.1);
                        padding: 20px;
                        border-radius: 10px;
                    }
                    .cta-button {
                        display: inline-block;
                        padding: 15px 25px;
                        margin: 20px 0;
                            background-color: #580000; 
            
                        color: #ffffff;
                        text-decoration: none;
                        border-radius: 50px;
                        font-weight: bold;
                    }
            
            .cta-button:hover{
                background-color: #8a0000; 
            
            }
                    .footer {
                        margin-top: 30px;
                        color: #aaaaaa;
                    }
                    .footer a {
                        color: #FF6F61;
                        text-decoration: none;
                    }
                    .gif-container {
                        margin: 20px 0;
                    }
                    .gif-container img {
                        width: 100%;
                        border-radius: 10px;
                    }
            
            .reach{
            text-decoration:none;
            color:red;
            font-weight:bold;
            }
            
            .reach:hover{
            color:black;
            }
                    .emojis {
                        font-size: 24px;
                        margin: 20px 0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="logo">
                        <img src="https://i.ibb.co/nsQz2Gj/tv-seeklogo-1.png" alt="SleekTV Logo">
                    </div>
            
                    <h1>Welcome to SleekTV, ${firstName}! </h1>
            
                    <div class="content">
                        <p>We’re absolutely thrilled to have you on board. Get ready to dive into a vast library of movies, TV shows, and original content, all tailored just for you. At SleekTV, your entertainment experience is our top priority!</p>
                        
                        <div class="gif-container">
                            <img src="https://media.giphy.com/media/GBTia9dgnuiPu/giphy.gif?cid=ecf05e47p9hwgi2y7jayddcs7eqnrces3969dyfnqtyjf25z&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Welcome GIF">
                        </div>
            
                        <p class="emojis">🍿 🎬 📺</p>
            
                        <p>To get started, simply log in to your account and start exploring our endless entertainment options.</p>
            
                        <a href="#" class="cta-button">Start Watching Now</a>
                        
                        <p>Need help? We’re here for you 24/7. Just <a href="#" class="reach">reach out</a> if you have any questions.</p>
                    </div>
            
                    <div class="footer">
                        <p>Follow us on social media for the latest updates:</p>
                        <p>
                            <a href="https://www.facebook.com/SleekTV">Facebook</a> | 
                            <a href="https://www.twitter.com/SleekTV">Twitter</a> | 
                            <a href="https://www.instagram.com/SleekTV">Instagram</a>
                        </p>
                        <p>Thanks for choosing SleekTV! We can’t wait to see what you’ll watch next.</p>
                        <p><a href="https://sleek-tv.onrender.com/unsubscribe">Unsubscribe</a> | <a href="https://sleek-tv.onrender.com/privacy">Privacy Policy</a></p>
                    </div>
                </div>
            </body>
            </html>
`
        }

        // Ask Transport to send email details
        const result = await mailerTransport.sendMail(mailDetails)

        return result
    
        
    } catch (error) {

        return console.log(error)
        
    }

}


const sendResetPasswordEmail = async ( userEmail, emailSubject,  Url )=>{

    try {
        
        // Create Transport
        const mailerTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: `${process.env.EMAIL}`,
                pass: `${process.env.EMAIL_PASSWORD}`
            }
        })
    
        // Create email details to send
        const mailDetails = {
            from: `${process.env.EMAIL}`,
            to: userEmail,
            subject: emailSubject,
            html:`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Reset Your Password - SleekTV</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: linear-gradient(145deg, rgba(6, 6, 6, 1) 0%, rgba(88, 0, 0, 1) 100%);
                        color: #060606;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        text-align: center;
                    }
                    .logo {
                        margin: 20px 0;
                    }
                    .logo img {
                        width: 150px;
                    }
                    h1 {
                        color: #FFf;
                    }
                    .content {
                        background: rgba(255, 255, 255, 0.1);
                        padding: 20px;
                        border-radius: 10px;
                    }
                    .button {
                        display: inline-block;
                        padding: 15px 25px;
                        margin: 20px 0;
                        background-color: #580000;
                        color: #ffffff;
                        text-decoration: none;
                        border-radius: 50px;
                        font-weight: bold;
                    }
            
                    .button:hover {
                        background-color: #8a0000;
                    }
                    .footer {
                        margin-top: 30px;
                        color: #aaaaaa;
                    }
                    .footer a {
                        color: #FF6F61;
                        text-decoration: none;
                    }
                    .reach {
                        text-decoration: none;
                        color: red;
                        font-weight: bold;
                    }
                    .reach:hover {
                        color: black;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="logo">
                        <img src="https://i.ibb.co/nsQz2Gj/tv-seeklogo-1.png" alt="SleekTV Logo">
                    </div>
            
                    <h1>Reset Your Password</h1>
            
                    <div class="content">
                        <p>Hello, user</p>
                        <p>We received a request to reset your password. Click the button below to reset your password:</p>
                        
                        <a href="${Url}" class="button">Reset Password</a>
                        
                        <p>If you did not request a password reset, please ignore this email. This link will expire in 1 hour.</p>
                    </div>
            
                    <div class="footer">
                        <p>Need help? We’re here for you 24/7. Just <a href="#" class="reach">reach out</a> if you have any questions.</p>
                        <p>Thanks for choosing SleekTV!</p>
                    </div>
                </div>
            </body>
            </html>
    `
        }

        // Ask Transport to send email details
        const result = await mailerTransport.sendMail(mailDetails)

        return result
    
        
    } catch (error) {
        return console.log(error)
        
    }


}



module.exports = {
    sendWelcomeEmail,
    sendResetPasswordEmail
}