import Queue from 'bee-queue';
import SendMail from './mail/send';
const queue = new Queue('mail');

queue.on('ready', () => {
    queue.process(async (job, done) => {
        console.log(`Processing job ${job.id}`);
        await SendMail();
        done(null, job.data.x + job.data.y);
    })
})