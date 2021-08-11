const Router = require("express").Router;
const listController = require("../controllers/list-controller");

const router = new Router();

router.get("/list", listController.getlist);

module.exports = router;
