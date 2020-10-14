const express = require('express');
const router = express.Router();

const indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.home);

/* GET detail page */
router.get('/detail', indexController.detail);

/* Return URLs */
router.get("/success", indexController.success);
router.get("/failure", indexController.failure);
router.get("/pending", indexController.pending);

router.post("/notifications", indexController.notifications);

module.exports = router;
