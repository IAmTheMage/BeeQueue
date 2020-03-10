import Queue from 'bee-queue';
import 'dotenv/config';


const QueueProcess = new Queue('mail', {
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
})

const job = QueueProcess.createJob({x: 2, y: 3});

job.save();

export default QueueProcess;