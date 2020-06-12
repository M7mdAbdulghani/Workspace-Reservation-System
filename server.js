const express = require("express");
const dotenv = require("dotenv");
//Logger
// const logger = require("./middlewares/logger");
const morgan = require("morgan");
const sequelize = require("./config/database");
const errorHandler = require("./middlewares/error");
const colors = require("colors");

//Load environment variables
dotenv.config({ path: "./config/config.env" });

//Routes
const memberships = require("./routes/memberships");

//Models
const Membership = require("./models/Membership");

const app = express();

//Body Parse
app.use(express.json());

//Dev Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount the Routes
app.use("/api/v1/memberships", memberships);

//Error Handler
app.use(errorHandler);

//Testing Db Connection
sequelize.authenticate().then(() => {
  console.log(`Connection has been established successfully.`.yellow.bold);
});

//Sync Models to Tables
sequelize
  .sync()
  .then((result) => {
    console.log(`Tables Created Successfully`.green.bold);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

//Running the Server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} environment and on PORT ${PORT}`
      .cyan.underline
  );
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
