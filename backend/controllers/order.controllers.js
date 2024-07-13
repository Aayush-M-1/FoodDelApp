import Order from "../models/order.models.js";
import User from "../models/user.models.js"
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// placing user order for frontend
const placeOrder = async (req,res) => {

    const frontend_url = "http://localhost:5173"

    try {
        const newOrder = new Order({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save();

        // after user has placed his order, clear the cart
        await User.findByIdAndUpdate(req.body.userId, {cartData:{}});

        // creating payment functionality
        const line_items = req.body.items.map((item)=>({
            price_data: {
                currency: "inr",
                product_data:{
                    name:item.name
                },
                unit_amount: item.price*100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data:{
                currency: "inr",
                product_data:{
                    name: "Delivery Charges"
                },
                unit_amount: 40*100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })

        res.json({success:true, session_url:session_url})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"error during transaction"})
    }
}

export {placeOrder}