const express = require('express');
const Seneca = require('seneca');
const SenecaWeb = require('seneca-web');
const bodyParser = require('body-parser');

const app = express();
const seneca = Seneca();

// Configure Seneca web
const senecaWebConfig = {
    context: app,
    adapter: require('seneca-web-adapter-express'),
    options: {
        parseBody: false // Let Express handle body parsing
    }
};

// Use Seneca web with Express
seneca.use(SenecaWeb, senecaWebConfig);

// Use your custom plugin
seneca.use('./sales-tax-plugin');

// Middleware for Express
app.use(bodyParser.json());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

seneca.ready(() => {
    console.log('Seneca is ready');
});
