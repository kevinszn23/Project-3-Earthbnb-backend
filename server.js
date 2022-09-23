// CONFIGURATION

require('dotenv').config();
require("./config/db.connection");
const { PORT = 4001 } = process.env;

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// CONTROLLERS
const controller = require("./controllers")

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(`/listings`, controller.listings);
app.use(`/reviews`, controller.reviews);

app.get('/', (req, res) => {
    res.send(`Hello World`);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));