const express = require("express");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");
const uuid = require("uuid");
const cors = require("cors");
const compression = require("compression");

const app = express();

port = process.env.PORT || 8080;
app.set("port", port);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(compression());
app.use(morgan("dev"));

//rutas
app.use("/api/", require("./routes/index"));

//statics files
app.use(express.static(path.join(__dirname, "public"), {maxAge: '1d'}));

app.listen(port, () => {
  console.log("Serveron port " + app.get("port"));
});
