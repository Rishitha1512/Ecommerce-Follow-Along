const express = require('express');
const router = express.Router();
const verifyUser = require('../middlewares/jwt-verify.js');
const { CreateOrder, GetUserOrders } = require('../controllers/order.controller.js');

router.get('/user-orders-data', verifyUser, GetUserOrders)
router.post("/confirm-order", verifyUser, CreateOrder)

module.exports = router;