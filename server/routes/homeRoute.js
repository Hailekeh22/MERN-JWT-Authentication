const { Router } = require("express");
const { verifyToken } = require("../middleware/checkToken");
const { homeController } = require("../controller/homeController");

const homeRoute = Router();

homeRoute.get("/home", verifyToken, homeController);

module.exports = { homeRoute };
