import User from '../models/user.models.js'

// On refreshing we were losing cart data, that's why we are writing cart controllers and routes, inorder to save cartData into database 
// FOR INTERVIEW: we are extracting user's id from token using auth middleware, user needn't do anything

// add items to user cart
const addToCart = async (req,res) => {
    try {
        // console.log(req.body.userId);
        let userData = await User.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await User.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "added to cart successfully"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error while adding to cart"})
    }
}

// remove items from user cart
const removeFromCart = async (req,res) => {
    try {
        let userData = await User.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }
        await User.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "removed from cart successfully"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error while removing from cart"})
    }
}

// fetch user cart data
const getCart = async (req,res) => {
    try {
        let userData = await User.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success: true, cartData: cartData})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error while fetching cart data"})
    }
}

export{
    addToCart,
    removeFromCart,
    getCart
}