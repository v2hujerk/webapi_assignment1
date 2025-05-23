console.log("Starting Product Catalog Module");

module.exports = {
    description: "Product Catalog Management System",
    products: [], // Array to store product entries
    promotions: [], // Array to store promotional campaigns

    // Adds a new product to the catalog
    addProduct(name, price, category) {
        this.products.push({
            name: name,
            price: price,
            category: category,
            stock: 0,
            reviews: [],
        });
        console.log(`Product "${name}" added successfully.`);
    },

    // Lists all products in the catalog
    listProducts() {
        return this.products;
    },

    // Updates a product by index
    updateProduct(index, updatedDetails) {
        if (this.products[index]) {
            this.products[index] = {
                ...this.products[index],
                ...updatedDetails,
            };
            console.log(`Product at index ${index} updated successfully.`);
        } else {
            console.log(`Product at index ${index} does not exist.`);
        }
    },

    // Adds a promotion
    addPromotion(name, discount) {
        this.promotions.push({
            name: name,
            discount: discount,
        });
        console.log(`Promotion "${name}" with ${discount}% discount added successfully.`);
    },

    // Lists promotions
    listPromotions() {
        return this.promotions;
    },

    // Restocking product
    restockProduct(index, quantity) {
        if (this.products[index]) {
            this.products[index].stock += quantity;
            console.log(`Product "${this.products[index].name}" restocked || Quantity: ${quantity}.`);
        } else {
            console.log(`Product at index ${index} does not exist.`);
        }
    },

    // Add a customer review to a product
    addProductReview(index, review) {
        if (this.products[index]) {
            this.products[index].reviews.push(review);
            console.log(`Review added for product "${this.products[index].name}".`);
        } else {
            console.log(`Product at index ${index} does not exist.`);
        }
    },

    // Generate a stock report
    generateStockReport() {
        const report = this.products.map(product => ({
            productName: product.name,
            stock: product.stock,
        }));
        console.log("Stock report generated.");
        return report;
    },
};

