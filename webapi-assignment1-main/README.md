# Product Catalog Management Module
This Node module provides basic product catalog management features, allowing users to add, update, and manage products, stock levels, promotions, and customer reviews in a simulated inventory system.

# How To Use
1. Install Node.js on your system
2. Download and Add XuanWei_ProductCatalog in your project folder
3. To Use the command you will have to have a seperate App.js file to run these functions

I have provided a App.js File as an example on how you are able to use these functions.
To run the App.js file, open the integrated terminal of the App.js and run it by typing "node App.js" in the integrated terminal.

Functionality of Each Function:
-**addProduct**: Adds a new product to the catalog with details like name, price, and category. Initializes the stock to 0 and an empty list for customer reviews.
-**listProducts**: Lists all products currently available in the catalog.
-**updateProduct**: Updates the details of an existing product (e.g., price, name, category) using its index in the product list.
-**addPromotion**: Adds a new promotional offer with a name and discount percentage.
-**listPromotions**: Lists all active promotions added to the system.
-**restockProduct**: Increases the inventory stock of a product by a specified quantity.
-**addProductReview**: Adds a customer review or feedback to a specific product.
-**generateStockReport**: Generates a report showing each product's name and current stock level.

# References
i used ChatGpt to clean up my code for a few syntax errors and format it nicer