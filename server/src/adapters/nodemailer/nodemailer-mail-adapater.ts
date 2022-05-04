import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "10b732f91eb425",
      pass: "3bd2b2cfcddc86"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Akray <akray.anastopulos@gmail.com>',
            subject: subject,
            html: body
        })
    };
}