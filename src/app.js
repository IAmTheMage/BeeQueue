import express from 'express';
import router from './router';
class App {
    server;
    constructor() {
        this.server = express();
        this.routes();
    }

    routes() {
        this.server.use(express.json());
        this.server.use(router);
    }

    init(port = 3000) {
        this.server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    }
}

export default new App;