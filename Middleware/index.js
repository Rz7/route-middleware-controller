import cors from 'cors';
import Express from 'express';

export default async function Middleware(express = Express()) {

    // Some middleware
    express.use(cors());

    return express;
}