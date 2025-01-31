import express from 'express'
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/order.controllers.js'
import authMiddleware from '../middlewares/auth.js'

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders", authMiddleware, userOrders)
orderRouter.get("/list", listOrders)
orderRouter.post("/status", updateStatus)

export default orderRouter