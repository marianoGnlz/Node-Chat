const express = require('express');
const bodyParser = require('body-parser');

// const router = require("./components/message/network");
const router = require('./network/routes');



const app = express();
const port = 3000;

app.use(bodyParser.json());

router(app);

app.use('/app', express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));