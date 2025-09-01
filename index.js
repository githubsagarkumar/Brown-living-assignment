const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Hardcoded list of products
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Headphones', price: 150 }
];

// GET /products - return the list of products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /cart - accept productId and quantity, return total price
app.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  if (!quantity || quantity <= 0) {
    return res.status(400).json({ error: 'Invalid quantity' });
  }
  const total = product.price * quantity;
  res.json({ total });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
