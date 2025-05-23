const catalog = require('./XuanWei_ProductCatalog');

// Add products
catalog.addProduct("Laptop", 1500, "Electronics");
catalog.addProduct("Sneakers", 80, "Fashion");

// List products
console.log("Product List:", catalog.listProducts());

// Update a product
catalog.updateProduct(0, { price: 1400 });

// Restock products
catalog.restockProduct(0, 20);
catalog.restockProduct(1, 50);

// Add reviews
catalog.addProductReview(0, "Great value for money!");
catalog.addProductReview(1, "Very comfortable shoes.");

// Add promotion
catalog.addPromotion("New Year Sale", 15);

// List promotions
console.log("Promotions:", catalog.listPromotions());

// Generate stock report
console.log("Stock Report:", catalog.generateStockReport());
