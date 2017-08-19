import Express from 'express';
import Routes from './Routes';
import Middleware from './Middleware';
import DB from './Database/connect';

module.exports = class App {
    constructor() {

        // Connect to the database
        this.DB = DB();

        // Run ExpressJS
        this.express = Express();

        // Start initialization process
        this.init();

        return this;
    }

    init() {
        let self = this;

        // Set a port to listen to
        this.express.listen(3000, () => console.log('Listening on port 3000!'));

        // Run middleware
        Middleware(this.express);

        // Initialize routes
        new Routes([], this.express);
    }
};
