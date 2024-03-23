const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js')


//get all products
router.get('/', getProducts);

//get by id
router.get('/:id', getProduct);

//add new
router.post('/', createProduct);

//update
router.put('/:id', updateProduct);

//delete product
router.delete('/:id', deleteProduct);



module.exports = router;