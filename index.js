require("babel-register");
require("babel-polyfill");

let os = require('os');
let cluster = require('cluster');
let App = require('./app');

function master() {

    for (let i = 0; i < /*os.cpus().length*/1; i++)
        cluster.fork();

    cluster.on("exit", cluster.fork);
}

function worker() {
    let app = new App();
}

cluster.isMaster ? master() : worker();