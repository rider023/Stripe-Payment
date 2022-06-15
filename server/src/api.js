"use strict";
exports.__esModule = true;
exports.app = void 0;
var express = require('express');
exports.app = express();
exports.app.use(express.json());
var cors = require('cors');
exports.app.use(cors({ origin: true }));
exports.app.post('/test', function (req, res) {
    var amount = req.body.amount;
    res.status(200).send({ with_tax: amount * 7 });
});
