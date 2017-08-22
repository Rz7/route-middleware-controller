import cors from 'cors';
import parser from 'body-parser';
import expressValidation from 'express-validation';
import Express from 'express';

export default async function Middleware(express = Express()) {

    express.use(cors());

    express.use(parser.json());

    express.use(function (err, req, res, next) {
        // specific for validation errors
        if (err instanceof expressValidation.ValidationError) return res.status(err.status).json(err);

        // other type of errors, it *might* also be a Runtime Error
        // example handling
        if (process.env.NODE_ENV !== 'production') {
            return res.status(500).send(err.stack);
        } else {
            return res.status(500);
        }
    });

    return express;
}