const path = require("path");

const express = require("express");
const multer  = require('multer')
const bodyParser = require('body-parser');
const dotEnv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const indexRoutes = require("./routers");

//* Load Config
dotEnv.config({ path: "./config/config.env" });

//* Database connection
connectDB();
const Upload = require("./models/Profile");
const app = express();

//* Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//setting options for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//* Static Folder
app.use(bodyParser.urlencoded({limit: '15mb', extended: false }))
app.use(bodyParser.json({limit: '15mb'}))
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
//* Routes
app.use("/api",indexRoutes);

//* Select a port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
