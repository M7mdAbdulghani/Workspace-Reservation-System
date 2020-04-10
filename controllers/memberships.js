//@desc         Get all Memberships
//@route        GET /api/v1/memberships
//@access       Public
exports.getMemberships = (req, res, next) => {
  res.status(200).json({ success: true, message: "Get All Memberships" });
};

//@desc         Create New Membership
//@route        POST /api/v1/memberships
//@access       Private
exports.createMembership = (req, res, next) => {
  res.status(200).json({ success: true, message: "Create new Membership" });
};

//@desc         Get Single Membership
//@route        GET /api/v1/memberships/:id
//@access       Public
exports.getMembership = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Get Membership ${req.params.id}` });
};

//@desc         Update Membership
//@route        PUT /api/v1/memberships/:id
//@access       Private
exports.updateMembership = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update Membership ${req.params.id}` });
};

//@desc         Delete Membership
//@route        DELETE /api/v1/memberships/:id
//@access       Private
exports.deleteMembership = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete Membership ${req.params.id}` });
};
