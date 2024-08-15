const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Modèle de données pour les produits
const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
  image: String
});

// Route pour récupérer tous les produits
router.get('/products', async (req, res) => {
  const products = await Product.find().exec();
  res.json(products);
});

// Route pour créer un nouveau produit
router.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Route pour récupérer un produit par ID
router.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id).exec();
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.json(product);
  }
});

// ... ajoutez d'autres routes pour les avis, les blogs, etc.

module.exports = router;