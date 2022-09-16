const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
//routes
const routes = require("./routes/index.js");
app.use("/", routes);

//server listening
app.listen(process.env.PORT || 3000);

console.log("escuchando el puerto 3000");
