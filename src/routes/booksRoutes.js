import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

export default router
    .get("/books", BookController.listBooks)
    .get("/books/:id", BookController.listIdBooks)
    .post("/books", BookController.registerBooks)
    .put("/books/:id", BookController.updateBooks)
    .delete("/books/:id", BookController.deleteBooks)

