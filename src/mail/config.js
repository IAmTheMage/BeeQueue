import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a06d6a80e523b6",
        pass: "ed024d3fa18eeb"
    }
})

export default transporter;