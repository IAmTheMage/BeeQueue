import nodemailer from 'nodemailer';
import path from 'path';
import hbs from 'nodemailer-express-handlebars';
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a06d6a80e523b6",
        pass: "ed024d3fa18eeb"
    }
})

const viewsOptions = {
    viewEngine: 'express-handlebars',
    viewPath: './views'
}

transporter.use('compile', hbs(viewsOptions));

export default transporter;