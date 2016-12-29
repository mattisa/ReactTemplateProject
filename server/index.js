const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const basicAuth = require('basic-auth-connect');
const websocket = require('express-ws');
const configServices = require('./modules/configServices/index');
const config = require('./config');
const logger = require('./logger');

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(basicAuth('rrrocdemo', '#E@YBY4UJaze'));
}
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

websocket(app);
app.use('/api', configServices.api());

app.use(morgan('combined'));
app.use(express.static('www'));
app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(config.server.port, () => {
    logger.log(`Example app listening on port ${config.server.port}!`);
});
