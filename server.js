const express = require("express");
const dotenv = require("dotenv");
//Logger
// const logger = require("./middlewares/logger");
const morgan = require("morgan");

//Routes
const memberships = require("./routes/memberships");

//Load environment variables
dotenv.config({ path: "./config/config.env" });

const app = express();

//Dev Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount the Routes
app.use("/api/v1/memberships", memberships);

//Running the Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} environment and on PORT ${PORT}`
  );
});
