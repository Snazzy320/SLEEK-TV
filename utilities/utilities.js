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
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #000; color: #ffffff;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <tr>
            <td style="text-align: center; padding: 20px 0;">
                <img src="https://i.ibb.co/nsQz2Gj/tv-seeklogo-1.png" alt="SleekTV Logo" style="width: 100px;">
            </td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;padding: 20px;">Welcome to SleekTV, ${firstName}!</h1>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; text-align: center;">
                <p style="margin: 0 0 10px;">We’re absolutely thrilled to have you on board. Get ready to dive into a vast library of movies, TV shows, and original content, all tailored just for you. At SleekTV, your entertainment experience is our top priority!</p>
                <img src="https://media.giphy.com/media/GBTia9dgnuiPu/giphy.gif?cid=ecf05e47p9hwgi2y7jayddcs7eqnrces3969dyfnqtyjf25z&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Welcome GIF" style="width: 100%; max-width: 560px; border-radius: 10px; margin: 20px 0;">
                <p style="font-size: 24px; margin: 20px 0;">🍿 🎬 📺</p>
                <p style="margin: 0 0 20px;">To get started, simply log in to your account and start exploring our endless entertainment options.</p>
                <a href="#" style="display: inline-block; padding: 15px 25px; margin: 20px 0; background-color: #8a0000; color: #ffffff; text-decoration: none; border-radius: 50px; font-weight: bold;">Start Watching Now</a>
                <p style="margin: 20px 0;">Need help? We’re here for you 24/7. Just <a href="#" style="color: red; text-decoration: none; font-weight: bold;">reach out</a> if you have any questions.</p>
            </td>
        </tr>
        <tr>
            <td style="text-align: center; color: #aaaaaa; padding-top: 30px;">
                <p style="margin: 0;">Follow us on social media for the latest updates:</p>
                <p style="margin: 10px 0;">
                    <a href="https://www.facebook.com/SleekTV" style="color: #FF6F61; text-decoration: none;">Facebook</a> |
                    <a href="https://www.twitter.com/SleekTV" style="color: #FF6F61; text-decoration: none;">Twitter</a> |
                    <a href="https://www.instagram.com/SleekTV" style="color: #FF6F61; text-decoration: none;">Instagram</a>
                </p>
                <p style="margin: 0;">Thanks for choosing SleekTV! We can’t wait to see what you’ll watch next.</p>
                <p style="margin: 10px 0;">
                    <a href="https://sleek-tv.onrender.com/unsubscribe" style="color: #FF6F61; text-decoration: none;">Unsubscribe</a> | 
                    <a href="https://sleek-tv.onrender.com/privacy" style="color: #FF6F61; text-decoration: none;">Privacy Policy</a>
                </p>
            </td>
        </tr>
    </table>
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
            background: #000;
            color: #fff;
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
            color: #ffff;
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