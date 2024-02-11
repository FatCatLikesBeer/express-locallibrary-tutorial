const Author = require('../models/author.js');
const asyncHandler = require('express-async-handler');

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author list");
});
