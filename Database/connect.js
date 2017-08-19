import mongoose from 'mongoose';
import Promise from 'bluebird';

import settings from '../mongodb-settings';

function open(db) {
    return new Promise((resolve) => {
        db.once('open', resolve);
    });
}

export default async function connect() {

    const type = settings.type;
    const name = settings.name;
    const password = settings.password;
    const dbname = settings.dbname;
    const params = settings.params;
    const hosts = settings.hosts;

    mongoose.connect(`${type}://${name}:${password}@${hosts[0]},${hosts[1]},${hosts[2]}/${dbname}?${params}`,
                        { useMongoClient: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    await open(db);

    return db;
}

