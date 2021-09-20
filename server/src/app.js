import express from 'express';
import initializer from './initializer/index.js';

require('dotenv').config();

const startServer = () => {
    const app = express();
    const { SERVER_PORT } = process.env;
    initializer.init(app);
    app.listen(SERVER_PORT, () => console.log('SUCCESS'));
};

startServer();