const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("ekrracom_ekrra", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
