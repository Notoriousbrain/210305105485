// src/index.js
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3333;

const BASE_URL = process.env.BASE_URL;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const COMPANIES = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
const CATEGORIES = [
  "Phone",
  "Computer",
  "TV",
  "Earphone",
  "Tablet",
  "Charger",
  "Mouse",
  "Keypad",
  "Bluetooth",
  "Pendrive",
  "Remote",
  "Speaker",
  "Headset",
  "Laptop",
  "PC",
];

async function register() {
  console.log("Registered with e-commerce APIs");
}

async function fetchProducts(categoryName, minPrice, maxPrice, top) {
  const headers = {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  };

  const promises = COMPANIES.map(async (company) => {
    const url = `${BASE_URL}/companies/${company}/categories/${categoryName}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
      const response = await axios.get(url, { headers });
      return response.data.map((product) => ({
        ...product,
        company,
      }));
    } catch (error) {
      console.error(
        `Error fetching products from ${company}: ${error.message}`
      );
      throw new Error(`Failed to fetch products from ${company}`);
    }
  });

  try {
    const results = await Promise.all(promises);
    return results.flat();
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

function generateUniqueId(product) {
  return `${product.company}-${product.id}`;
}

app.get("/categories/:categoryName/products", async (req, res) => {
  const { categoryName } = req.params;
  const {
    n = 10,
    page = 1,
    sortBy,
    order = "asc",
    minPrice = 0,
    maxPrice = Number.MAX_SAFE_INTEGER,
  } = req.query;

  if (!CATEGORIES.includes(categoryName)) {
    return res.status(400).json({ error: "Invalid category name" });
  }

  try {
    const products = await fetchProducts(categoryName, minPrice, maxPrice, n);

   
    if (sortBy) {
      products.sort((a, b) => {
        if (order === "asc") return a[sortBy] - b[sortBy];
        return b[sortBy] - a[sortBy];
      });
    }


    const startIndex = (page - 1) * n;
    const endIndex = startIndex + n;
    const paginatedProducts = products.slice(startIndex, endIndex);

   
    const response = paginatedProducts.map((product) => ({
      ...product,
      uniqueId: generateUniqueId(product),
    }));

    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: error.message });
  }
});


app.get("/categories/:categoryName/products/:productId", async (req, res) => {
  const { categoryName, productId } = req.params;

  if (!CATEGORIES.includes(categoryName)) {
    return res.status(400).json({ error: "Invalid category name" });
  }

  try {
    const products = await fetchProducts(
      categoryName,
      0,
      Number.MAX_SAFE_INTEGER,
      10
    );
    const product = products.find((p) => generateUniqueId(p) === productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch product details",
      details: error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  register(); 
});
