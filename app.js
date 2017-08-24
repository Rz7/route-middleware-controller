import Path from 'path';
import Express from 'express';
import ExpressHandlebars from 'express-handlebars';

import Routes from './Routes';
import Middleware from './Middleware';
import { database } from './Database';

module.exports = class App {
    constructor() {

        // Run ExpressJS
        this.app = Express();

        // Start initialization process
        this.init();

        return this;
    }

    async init() {
        console.log('[App] Initialization started');

        // Set a port to listen to
        this.app.listen(3000, () => console.log('[App] Express is listening on port 3000'));

        // Run middleware
        await Middleware(this.app);

        //
        this.app.engine('.hbs', ExpressHandlebars({
            defaultLayout: 'main',
            extname: '.hbs',
            layoutsDir: Path.join(__dirname, 'Content/layouts')
        }));
        this.app.set('view engine', '.hbs');
        this.app.set('views', Path.join(__dirname, 'Content'));

        // Connect to the database
        this.DB = await database.connect().catch(e => console.log('[App] Connecting error:', e));

        // Initialize routes
        new Routes([], this.app);
    }
};
