
const Router = require('express').Router;
const controller = require('../controllers/config.controller');

function api() {
	const router = new Router();
    router.get('/config', controller.getConfig);
	return router;
}

module.exports.api = api;
