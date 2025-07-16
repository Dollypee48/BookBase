const mongoose = require("mongoose"); 
const Book = require("../models/Book");


exports.getBooks = async (req, res) => {
  const books = await Book.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.status(200).json(books);
};


exports.createBook = async (req, res) => {
  const { title, author, status, rating, comment } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }

  const book = await Book.create({
    user: req.user._id,
    title,
    author,
    status,
    rating,
    comment,
  });

  res.status(201).json(book);
};

exports.updateBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  if (book.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updated);
};


exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid book ID" });
  }

  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (book.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  await book.deleteOne(); 

  res.status(200).json({ message: "Book deleted" });
};
