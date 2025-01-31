import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/food.routes.js";
import userRouter from "./routes/user.routes.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";


// app config
const app = express()
const port = 4000;

// middlewares
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req,res)=>{
    res.send("API working")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})
