require("babel-register");
require("babel-polyfill");

let os = require('os');
let cluster = require('cluster');

function master() {

    /*os.cpus().length*/
    for (let i = 0; i < 1; i++)
        cluster.fork();

    cluster.on("exit", cluster.fork);
}

function worker() {
    const App = require('./app');
    const app = new App();
}

cluster.isMaster ? master() : worker();