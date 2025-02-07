const express = require('express');
const router = express.Router();
const verifyUser = require('../middlewares/jwt-verify.js');
const { CreateOrder, GetUserOrders, CancelOrder } = require('../controllers/order.controller.js');

router.get('/user-orders-data', verifyUser, GetUserOrders)
router.post("/confirm-order", verifyUser, CreateOrder)
router.patch('/cancel-order', verifyUser, CancelOrder);

module.exports = router;