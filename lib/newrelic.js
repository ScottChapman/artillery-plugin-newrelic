const _ = require('lodash')

module.exports = class ArtilleryPluginNewrelic {
    constructor(config, emitter) {
        this.config = config;
        this.emitter = emitter;
        this.started = false;
        emitter.on('phaseStarted', async obj => {
            return await this.started(obj);
        });
        emitter.on('phaseCompleted', async obj => {
            return await this.completed(obj);
        });
        emitter.on('stats', async obj => {
            return await this.stats(obj);
        });
        emitter.on('done', async obj => {
            return await this.done(obj);
        });
    }

    async started(obj) {
        console.log("started")
        console.log(JSON.stringify(obj,null,2));
    }

    async completed(obj) {
        console.log("completed")
        console.log(JSON.stringify(obj,null,2));
    }

    async stats(obj) {
        console.log("stats")
        console.log(JSON.stringify(obj,null,2));
    }

    async done(obj) {
        console.log("done")
        console.log(JSON.stringify(obj,null,2));
    }
}