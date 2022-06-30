"use strict";
exports.__esModule = true;
var express_1 = require("express");
var PORT = 3000;
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.get("/", function (req, res, next) {
    res.json("Hello World!");
    next();
});
app.listen(PORT, function () {
    console.log("You are listening on port", PORT);
});
