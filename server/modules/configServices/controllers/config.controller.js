const _ = require('lodash');
const logger = require('../../../logger');
const config = require('../../../config');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class ConfigController {

    constructor() {
        this.getConfig = this.getConfig.bind(this);
    }

    getConfig(req, res) {
        res.send({
            cameras: this.getCameras()
        });
    }

    getCameras() {
        return config.PTXCamera.map((cam) => {
            return _.pick(cam, 'hostname', 'initialPosition', 'presets');
        });
    }

}

const instance = new ConfigController();
module.exports = instance;
