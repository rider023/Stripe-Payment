"use strict";
exports.__esModule = true;
exports.stripe = void 0;
var dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.config();
}
//Initialize Stripe
var stripe_1 = require("stripe");
exports.stripe = new stripe_1["default"](process.env.STRIPE_SECRET, {
    apiVersion: '2020-08-27'
});
//Start the API with Express
var api_1 = require("./api");
var port = process.env.PORT || 5000;
api_1.app.listen(port, function () { return console.log("API is running at http://localhost:" + port); });
