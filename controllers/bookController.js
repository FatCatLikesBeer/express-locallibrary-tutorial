const Book = require('../models/book.js');
const Author = require('../models/author.js');
const Genre = require('../models/genre.js');
const BookInstance = require('../models/bookinstance.js');

const asyncHandler = require('express-async-handler');

// Book Catalog homepage
exports.index = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances, authors, and genre counts (in parallel).
  const [
  numBooks,
  numBookInstances,
  numAvailableBookInstances,
  numAuthors,
  numGenres,
] = await Promise.all([
      Book.countDocuments({}).exec(),
      BookInstance.countDocuments({}).exec(),
      BookInstance.countDocuments({ status: "Available" }).exec(),
      Author.countDocuments({}).exec(),
      Genre.countDocuments({}).exec(),
    ]);

  res.render("catalog", {
    title: "Local Library Home",
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: numAvailableBookInstances,
    author_count: numAuthors,
    genre_count: numGenres,

  });
});

// Display list of all Books.
exports.book_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book List');
});

// Display detail page for a specific Book.
exports.book_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
});

// Display Book create form on GET.
exports.book_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book create GET');
});

// Handle Book create on POST.
exports.book_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book create POST');
});

// Display Book delete form on GET.
exports.book_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book delete GEt');
});

// Handle Book delete on POST.
exports.book_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book delete POST');
});

// Handle Book update form on GET.
exports.book_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book update GET');
});

// Handle Book update on POST.
exports.book_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book update POST');
});
