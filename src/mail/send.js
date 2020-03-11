import transport from './config';
import html from './simpleview';
async function sendMail(
    From = "gustavosjn2013@gmail.com 👻", 
    To = "gustavosjn2013@gmail.com",
    Subject = "Hello ✔",
    Text = "You queue is open",
    ) {
    await transport.sendMail({
        from: From, // sender address
        to: To, // list of receivers
        subject: Subject, // Subject line
        text: Text, // plain text body
        html: html // h
    })
}

export default sendMail;