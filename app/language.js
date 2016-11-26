var language = 'fr'; // en/fr/es

exports.Factors = require("./languages/" + language + "/factors/factors.js").Factors;
exports.Products = require("./languages/" + language + "/products/products.js").Products;
exports.ProductsLabels = require("./languages/" + language + "/products/labels.js").Labels;
