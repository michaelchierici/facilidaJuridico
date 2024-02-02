const express = require("express");
const cors = require("cors");
const errorHandler = require("./app/middlewares/errorHandler");

const routes = require("./routes");
require("express-async-errors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log("http://localhost:3001"));
