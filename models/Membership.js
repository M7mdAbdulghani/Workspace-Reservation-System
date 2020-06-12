const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Membership = sequelize.define("membership", {
  id: {
    field: "MembershipID",
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    field: "Name",
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: {
      args: true,
      msg: "Duplicate Name field entered",
    },
    validate: {
      len: {
        args: [2, 50],
        msg: "Name cannot be more than 50 characters",
      },
      notEmpty: {
        args: true,
        msg: "Name is required",
      },
    },
  },
  price: {
    field: "Price",
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      isNumeric: {
        args: true,
        msg: "Only numeric values are allowed for the price",
      },
      notEmpty: {
        args: true,
        msg: "Price is required",
      },
    },
  },
  period: {
    field: "Period",
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isIn: {
        args: [[1, 3, 6, 12]],
        msg: "Must be valid period [1, 3, 6, 12]",
      },
      notEmpty: {
        args: true,
        msg: "Period is required",
      },
    },
  },
  internetAccess: {
    field: "InternetAccess",
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    validate: {
      isIn: {
        args: [[0, 1, true, false]],
        msg:
          "[internetAccess field] The value must be either true or false (1 for true, 0 for false)",
      },
    },
  },
  lobbyAccess: {
    field: "LobbyAccess",
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    validate: {
      isIn: {
        args: [[0, 1, true, false]],
        msg:
          "[lobbyAccess field] The value must be either true or false (1 for true, 0 for false)",
      },
    },
  },
  printingAndCopy: {
    field: "PrintingAndCopy",
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    validate: {
      isIn: {
        args: [[0, 1, true, false]],
        msg:
          "[printingAndCopy field] The value must be either true or false (1 for true, 0 for false)",
      },
    },
  },
  drinks: {
    field: "Drinks",
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    validate: {
      isIn: {
        args: [[0, 1, true, false]],
        msg:
          "[drinks field] The value must be either true or false (1 for true, 0 for false)",
      },
    },
  },
});

module.exports = Membership;
