const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const { clientsRoutes } = require("./routes/clients");
require('dotenv').config();

app.use(express.json());
app.use(cors());

clientsRoutes(app);

app.listen(port, console.log(`Example app listening on port ${port}!`));