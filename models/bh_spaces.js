const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const bh_spaces = sequelize.define(
  "bh_spaces",
  {
    space_pkid: {
      field: "space_pkid",
      type: Sequelize.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    creator_user_id: {
      field: "creator_user_id",
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "creator_user_id is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for creator_user_id",
        },
      },
    },
    space_title: {
      field: "space_title",
      type:
        Sequelize.STRING(255) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "space_title cannot be more than 255 characters",
        },
        notEmpty: {
          args: true,
          msg: "space_title is required",
        },
      },
    },
    space_website: {
      field: "space_website",
      type:
        Sequelize.STRING(200) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: true,
      validate: {
        len: {
          args: [2, 200],
          msg: "space_website cannot be more than 200 characters",
        },
      },
      defaultValue: null,
    },
    url_slug: {
      field: "url_slug",
      type:
        Sequelize.STRING(500) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        len: {
          args: [2, 500],
          msg: "url_slug cannot be more than 500 characters",
        },
        notEmpty: {
          args: true,
          msg: "url_slug is required",
        },
      },
    },
    gl_location: {
      field: "gl_location",
      type:
        Sequelize.STRING(255) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "gl_location cannot be more than 255 characters",
        },
        notEmpty: {
          args: true,
          msg: "gl_location is required",
        },
      },
    },
    gl_street_number: {
      field: "gl_street_number",
      type:
        Sequelize.STRING(255) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "gl_street_number cannot be more than 255 characters",
        },
        notEmpty: {
          args: true,
          msg: "gl_street_number is required",
        },
      },
    },
    gl_street_route: {
      field: "gl_street_route",
      type:
        Sequelize.STRING(255) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "gl_street_route cannot be more than 255 characters",
        },
        notEmpty: {
          args: true,
          msg: "gl_street_route is required",
        },
      },
    },
    gl_locality: {
      field: "gl_locality",
      type:
        Sequelize.STRING(255) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "gl_locality cannot be more than 255 characters",
        },
        notEmpty: {
          args: true,
          msg: "gl_locality is required",
        },
      },
    },
    gl_state: {
      field: "gl_state",
      type:
        Sequelize.STRING(255) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "gl_state cannot be more than 255 characters",
        },
        notEmpty: {
          args: true,
          msg: "gl_state is required",
        },
      },
    },
    gl_postal_code: {
      field: "gl_postal_code",
      type:
        Sequelize.STRING(50) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        len: {
          args: [2, 50],
          msg: "gl_postal_code cannot be more than 50 characters",
        },
        notEmpty: {
          args: true,
          msg: "gl_postal_code is required",
        },
      },
    },
    gl_country: {
      field: "gl_country",
      type:
        Sequelize.STRING(50) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        len: {
          args: [2, 50],
          msg: "gl_country cannot be more than 50 characters",
        },
        notEmpty: {
          args: true,
          msg: "gl_country is required",
        },
      },
    },
    gl_lat: {
      field: "gl_lat",
      type: Sequelize.FLOAT(10, 6),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "gl_lat is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for the gl_lat",
        },
      },
    },
    gl_lng: {
      field: "gl_lng",
      type: Sequelize.FLOAT(10, 6),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "gl_lng is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for the gl_lng",
        },
      },
    },
    space_description: {
      field: "space_description",
      type: Sequelize.TEXT + " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "space_description is required",
        },
      },
    },
    space_type_pkid: {
      field: "space_type_pkid",
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "space_type_pkid is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for the space_type_pkid",
        },
      },
    },
    space_size: {
      field: "space_size",
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "space_size is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for the space_size",
        },
      },
    },
    space_number_of_visitors: {
      field: "space_number_of_visitors",
      type: Sequelize.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      validate: {
        isNumeric: {
          args: true,
          msg:
            "Only numeric values are allowed for the space_number_of_visitors",
        },
      },
    },
    space_access_type: {
      field: "space_access_type",
      type: Sequelize.ENUM("1", "2", "3"),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "space_access_type is required",
        },
        isIn: {
          args: [["1", "2", "3"]],
          msg: "The value must be either 1, 2 or 3 for space_access_type",
        },
      },
    },
    space_status: {
      field: "space_status",
      type: Sequelize.ENUM("0", "1"),
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: "space_status is required",
        },
        isIn: {
          args: [["0", "1"]],
          msg: "The value must be either 0 or 1 for space_status",
        },
      },
    },
    is_approved: {
      field: "is_approved",
      type: Sequelize.ENUM("0", "1"),
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: "is_approved is required",
        },
        isIn: {
          args: [["0", "1"]],
          msg: "The value must be either 0 or 1 for is_approved",
        },
      },
    },
    last_submitted_step: {
      field: "last_submitted_step",
      type: Sequelize.ENUM("1", "2", "3", "4", "5", "6"),
      allowNull: false,
      defaultValue: 1,
      validate: {
        notEmpty: {
          args: true,
          msg: "last_submitted_step is required",
        },
        isIn: {
          args: [["1", "2", "3", "4", "5", "6"]],
          msg:
            "The value must be either 1, 2, 3, 4, 5 or 6 for last_submitted_step",
        },
      },
    },
    min_duration: {
      field: "min_duration",
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "min_duration is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for min_duration",
        },
      },
    },
    min_duration_key: {
      field: "min_duration_key",
      type: Sequelize.ENUM("hours", "days", "weeks", "months"),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "min_duration_key is required",
        },
        isIn: {
          args: [["hours", "days", "weeks", "months"]],
          msg:
            "The value must be either hours, days, weeks or months for min_duration_key",
        },
      },
    },
    max_duration: {
      field: "max_duration",
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "max_duration is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for max_duration",
        },
      },
    },
    max_duration_key: {
      field: "max_duration_key",
      type: Sequelize.ENUM("hours", "days", "weeks", "months", "none"),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "max_duration_key is required",
        },
        isIn: {
          args: [["hours", "days", "weeks", "months", "none"]],
          msg:
            "The value must be either hours, days, weeks, months or none for max_duration_key",
        },
      },
    },
    rate_per_hour: {
      field: "rate_per_hour",
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "rate_per_hour is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for rate_per_hour",
        },
      },
    },
    rate_per_day: {
      field: "rate_per_day",
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "rate_per_day is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for rate_per_day",
        },
      },
    },
    rate_per_weekend: {
      field: "rate_per_weekend",
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "rate_per_weekend is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for rate_per_weekend",
        },
      },
    },
    rate_per_fullweek: {
      field: "rate_per_fullweek",
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "rate_per_fullweek is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for rate_per_fullweek",
        },
      },
    },
    rate_per_fullmonth: {
      field: "rate_per_fullmonth",
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "rate_per_fullmonth is required",
        },
        isNumeric: {
          args: true,
          msg: "Only numeric values are allowed for rate_per_fullmonth",
        },
      },
    },
    sel_bdays: {
      field: "sel_bdays",
      type:
        Sequelize.STRING(50) +
        " CHARACTER SET 'utf8' COLLATE 'utf8_general_ci'",
      defaultValue: 1,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "sel_bdays is required",
        },
        len: {
          args: [2, 50],
          msg: "sel_bdays cannot be more than 50 characters",
        },
      },
    },
    date_added: {
      field: "date_added",
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "date_added is required",
        },
      },
    },
    date_modified: {
      field: "date_modified",
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      validate: {
        notEmpty: {
          args: true,
          msg: "date_modified is required",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = bh_spaces;
