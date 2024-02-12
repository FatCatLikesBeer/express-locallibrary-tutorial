// catalog.js - Book Catalog route module

const express = require("express");
const router = express.Router();

// Require control modules
const book_controller = require("../controllers/bookController.js");
const author_controller = require("../controllers/authorController.js");
const genre_controller = require("../controllers/genreController.js");
const book_instance_controller = require("../controllers/bookInstanceController.js");

/// BOOK ROUTES ///

// GET catalog page home
router.get("/", book_controller.index);

// GET request for creating Book. NOTE this must come before routes that display Book (uses id).
router.get("/book/create", book_controller.book_create_get);

// POST request for creating Book.
router.post("/book/create", book_controller.book_create_post);

// GET request for delete a Book.
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request for creating Book.
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request for update a Book.
router.get("/book/:id/update", book_controller.book_update_get);

// POST request for creating Book.
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for one Book.
router.get("/book/:id", book_controller.book_detail);

// GET request for a list of all book items.
router.get("/books", book_controller.book_list);


/// AUTHOR ROUTES ///

// GET request for creating author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", author_controller.author_create_get);

// POST request for creating author.
router.post("/author/create", author_controller.author_create_post);

// GET request for delete a author.
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request for creating author.
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request for update a author.
router.get("/author/:id/update", author_controller.author_update_get);

// POST request for creating author.
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one author.
router.get("/author/:id", author_controller.author_detail);

// GET request for a list of all author items.
router.get("/authors", author_controller.author_list);


/// GENRE ROUTES ///

// GET request for creating Genre. NOTE This must come bore route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request for delete a Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request for creating Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request for update a Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request for creating Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for a list of all Genres.
router.get("/genres", genre_controller.genre_list);


/// BOOKINSTANCE ROUTES ///

// GET request for creating BookInstance. NOTE This must come bore route that displays BookInstance (uses id).
router.get("/book_instance/create", book_instance_controller.bookinstance_create_get);

// POST request for creating BookInstance.
router.post("/book_instance/create", book_instance_controller.bookinstance_create_post);

// GET request for delete a BookInstance.
router.get("/book_instance/:id/delete", book_instance_controller.bookinstance_delete_get);

// POST request for creating BookInstance.
router.post("/book_instance/:id/delete", book_instance_controller.bookinstance_delete_post);

// GET request for update a BookInstance.
router.get("/book_instance/:id/update", book_instance_controller.bookinstance_update_get);

// POST request for creating BookInstance.
router.post("/book_instance/:id/update", book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
router.get("/book_instance/:id", book_instance_controller.bookinstance_detail);

// GET request for a list of all BookInstances.
router.get("/book_instances", book_instance_controller.bookinstance_list);

module.exports = router;
