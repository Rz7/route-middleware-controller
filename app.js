import Express from 'express';
import Routes from './Routes';
import Middleware from './Middleware';
import { database } from './Database';

module.exports = class App {
    constructor() {

        // Run ExpressJS
        this.express = Express();

        // Start initialization process
        this.init();

        return this;
    }

    async init() {
        console.log('[App] Initialization started');

        // Set a port to listen to
        this.express.listen(3000, () => console.log('[App] Express is listening on port 3000'));

        // Run middleware
        await Middleware(this.express);

        // Connect to the database
        this.DB = await database.connect().catch(e => console.log('[App] Connecting error:', e));

        // Initialize routes
        new Routes([], this.express);
    }
};
