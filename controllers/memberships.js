const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Membership = require("../models/Membership");
const { Op } = require("sequelize");

//@desc         Get all Memberships
//@route        GET /api/v1/memberships
//@access       Public
exports.getMemberships = asyncHandler(async (req, res, next) => {
  const reqQuery = { ...req.query };
  const operatorsMap = {
    gt: [Op.gt],
    gte: [Op.gte],
    lt: [Op.lt],
    lte: [Op.lte],
    in: [Op.in],
  };
  //All Properties
  let name = req.query.name;
  let price = req.query.price;

  let internetAccess = req.query.internetAccess;
  let lobbyAccess = req.query.lobbyAccess;
  let printingAndCopy = req.query.printingAndCopy;
  let drinks = req.query.drinks;

  let options = { where: {} };

  //Filtering (Done)
  for (var property in reqQuery) {
    //Get the property name and value
    // console.log(property, req.query[property]);
    if (property == "name") {
      options.where[property] = reqQuery[property];
    }
    if (
      property == "internetAccess" ||
      property == "lobbyAccess" ||
      property == "printingAndCopy" ||
      property == "drinks"
    ) {
      var getBoolValue = reqQuery[property] === "true";
      options.where[property] = getBoolValue;
    }
    if (property == "price") {
      const operator = extractCharacters(JSON.stringify(req.query.price));
      const value = extractValue(operator, req.query.price);
      if (!operator || !value) {
        options.where.price = Number(req.query.price);
      } else {
        options.where.price = {
          [Op[operator]]: value,
        };
      }
    }
    if (property == "period") {
      const values = req.query.period.toString().split(",");
      let intArray = [];
      values.forEach((value) => {
        intArray.push(Number(value));
      });
      options.where.period = {
        [Op.in]: intArray,
      };
    }
    if (property == "select") {
      delete reqQuery["select"];
    }
    if (property == "sort") {
      delete reqQuery["sort"];
    }
    if (property == "page") {
      delete reqQuery["page"];
    }
    if (property == "limit") {
      delete reqQuery["limit"];
    }
  }

  //Selecting (Done)
  if (req.query.select) {
    // console.log(req.query.select);
    let attributes = req.query.select.toString().split(",");
    options.attributes = attributes;
  }

  //Sorting (Done)
  if (req.query.sort) {
    //console.log(req.query.sort);
    let sortBy = req.query.sort.toString().split(",");
    options.order = sortBy;
  } else {
    options.order = ["createdAt"];
  }
  //Pagination(Done);
  let page;
  let limit;
  if (req.query.page) {
    page = parseInt(req.query.page, 10);
  } else {
    page = 1;
  }
  if (req.query.limit) {
    limit = parseInt(req.query.limit, 10);
  } else {
    limit = 1;
  }
  const skip = (page - 1) * limit;

  options.limit = limit;
  options.offset = skip;

  const { count, rows } = await Membership.findAndCountAll(options);
  const memberships = rows;

  //Pagination Result
  let pagination = {};

  if (page * limit > count) {
    pagination = {};
  } else if (page === 1) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  } else if (page * limit === count) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  } else {
    pagination.next = {
      page: page + 1,
      limit,
    };
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({
    success: true,
    message: "Memberships Found",
    pagination,
    data: memberships,
    count: memberships.length,
  });
});

//@desc         Create New Membership
//@route        POST /api/v1/memberships
//@access       Private
exports.createMembership = asyncHandler(async (req, res, next) => {
  // try {
  const membership = await Membership.create(req.body);
  res
    .status(200)
    .json({ success: true, message: "Membership Created", data: membership });
  // } catch (error) {
  //   next(error);
  // }
});

//@desc         Get Single Membership
//@route        GET /api/v1/memberships/:id
//@access       Public
exports.getMembership = asyncHandler(async (req, res, next) => {
  // try {
  const membership = await Membership.findByPk(req.params.id);

  if (!membership) {
    return next(
      new ErrorResponse(
        `Membership cannot be found with Id ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    message: `Membership found`,
    data: membership,
  });
  // } catch (error) {
  //   res.status(400).json({
  //     success: false,
  //     message: "There was an error",
  //   });
  // }
});

//@desc         Update Membership
//@route        PUT /api/v1/memberships/:id
//@access       Private
exports.updateMembership = asyncHandler(async (req, res, next) => {
  // try {
  const membership = await Membership.findByPk(req.params.id);
  if (!membership) {
    return next(
      new ErrorResponse(
        `Membership cannot be found with Id ${req.params.id}`,
        404
      )
    );
  }
  const updatedMembership = await membership.update(req.body);
  res.status(200).json({
    success: true,
    message: `Membership updated`,
    data: updatedMembership,
  });
  // } catch (error) {
  //   next(error);
  // }
});

//@desc         Delete Membership
//@route        DELETE /api/v1/memberships/:id
//@access       Private
exports.deleteMembership = asyncHandler(async (req, res, next) => {
  // try {
  const membership = await Membership.findByPk(req.params.id);
  if (!membership) {
    return next(
      new ErrorResponse(
        `Membership cannot be found with Id ${req.params.id}`,
        404
      )
    );
  }
  const deletedMember = await membership.destroy(req.params.id);
  res.status(200).json({
    success: true,
    message: `Membership deleted`,
    data: {},
  });
  // } catch (error) {
  //   next(error);
  // }
});

//@desc         Delete Memberships
//@route        DELETE /api/v1/memberships
//@access       Private
exports.deleteMemberships = asyncHandler(async (req, res, next) => {
  // try {
  const membership = await Membership.destroy({ where: {} });

  res.status(200).json({
    success: true,
    message: `Memberships Deleted`,
    data: {},
  });
  // } catch (error) {
  //   next(error);
  // }
});

//Extract the characters like lte, gte, gt, lt from string
function extractCharacters(queryStr) {
  let queryMatch;
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt|in)\b/g, (match) => {
    queryMatch = match;
    return queryMatch;
  });
  return queryMatch;
}
//Extract the value from operators like gte, lte, etc
function extractValue(operator, queryValue) {
  let value = queryValue[operator];
  return value;
}
