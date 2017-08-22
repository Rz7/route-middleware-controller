import mongoose from 'mongoose';
import Promise from 'bluebird';

import settings from '../mongodb-settings';

class Database {
    constructor() {
        this.connection = null;
        this.connectionStatus = "pending";
        console.log('[TEST] Build the database method was called');
    }

    async connect() {

        const type = settings.type,
              name = settings.name,
              password = settings.password,
              dbname = settings.dbname,
              params = settings.params,
              hosts = settings.hosts;

        // Use bluebird as Promise
        mongoose.Promise = Promise;

        // Connect to the database
        mongoose.connect(`${type}://${name}:${password}@${hosts.join(",")}/${dbname}?${params}`, { useMongoClient: true });

        // Remember the connection
        this.connection = mongoose.connection;

        // Update the connection status
        this.updateStatus("processing");

        // Waiting for events open/error
        if( await this.events(this.connection))
            console.log('[Database] Connected');

        return this.connection;
    }

    updateStatus(newStatus) {
        this.connectionStatus = newStatus;
    }

    async getConnection() {

        if( this.connectionStatus !== 'established') {
            // TODO: Need to wait till we get the connection if it is not done
            return false;
        }

        return this.connection;
    }

    events(connection) {
        return new Promise((resolve, reject) => {
            connection.once('open', resolve);
            connection.on('error', reject);
        })
        .then(() => {
            this.updateStatus("established");
            return true;
        })
        .catch((err) => {
            console.log('[Database] Error connection to MongoDB:', err);
            this.updateStatus("lost");
            return false;
        });
    }
}

export let database = new Database();