const express = require("express");
const router = express.Router();
const {
  getMemberships,
  getMembership,
  createMembership,
  updateMembership,
  deleteMembership,
  deleteMemberships,
} = require("../controllers/memberships");

router
  .route("/")
  .get(getMemberships)
  .post(createMembership)
  .delete(deleteMemberships);
router
  .route("/:id")
  .get(getMembership)
  .put(updateMembership)
  .delete(deleteMembership);

module.exports = router;
