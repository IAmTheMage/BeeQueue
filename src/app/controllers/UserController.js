import User from '../models/User';
import MailQueue from '../../queue/mailer';
import SendMail from '../../mail/send';
class UserController {
    async store(req,res) {
        const {name, email, password} = req.body;
        MailQueue.process(async (job) => {
            await SendMail();
        })
        const user = await User.query().insertGraph({
            name,
            email,
            password
        })
        return res.json({user});
    }
}

export default new UserController;