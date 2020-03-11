import User from '../models/User';
import QueueProcess from '../../queue/config';
class UserController {
    async store(req,res) {
        const {name, email, password} = req.body;
        const job = QueueProcess.createJob({x: 2, y: 3});
        job.save();
        const user = await User.query().insertGraph({
            name,
            email,
            password
        })
        return res.json({user});
    }
}

export default new UserController;