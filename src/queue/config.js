import Queue from 'bee-queue';
import 'dotenv/config';
const QueueProcess = new Queue('mail', {
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
})

export default QueueProcess;