import Express from 'express';

import main from './main';
import dogs from './dogs';
import cats from "./cats";

export default class Routes {
    constructor(routes, express = Express()) {

        // Initialize route-middleware-controller routes
        dogs(routes, express, this);

        // Initialize cats routes
        cats(routes, express, this);

        // Initialize main routes
        main(routes, express, this);

        return express;
    }

    handler(controllerEvent) {
        return (req, res) => {
            return Promise.resolve(controllerEvent(req)).then((content) => {
                res.send(content);
            });
        };
    }
}