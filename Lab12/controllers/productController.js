const Product = require('../models/product');
exports.getProducts = (req, res, next) => {
    res.status(200).json(Product.fetchAll());
}
exports.getProductById = (req, res, next) => {
    res.status(200).json(Product.findById(req.params.prodId));
}
exports.save = (req, res, next) => {
    const { title, ISBN, publishedDate, author } = req.body;
    const savedBook = new Product(null, title, ISBN, publishedDate, author).save();
    res.status(201).json(savedBook);
}
exports.update = (req, res, next) => {
    const { title, ISBN, publishedDate, author } = req.body;
    const updatedBook = new Product(req.params.prodId, title, ISBN, publishedDate, author).update();
    res.status(200).json(updatedBook);
}
exports.deleteById = (req, res, next) => {
    Product.deleteById(req.params.prodId);
    res.status(200).end();
}