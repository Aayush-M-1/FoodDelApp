import User from "../models/user.models.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// login user
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        // checking if user with given email exists or not
        const user = await User.findOne({email});

        if (!user) {
            return res.json({success:false, message: "User doesnot exist"})
        }

        // matching the password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.json({success:false, message:"Invalid password"})
        }

        const token = createToken(user._id);
        res.json({success:true, token})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error while logging user"})
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// register user
const registerUser = async (req,res) => {
    const {name, password, email} = req.body;
    try {
        // checking if user already exists
        const exists = await User.findOne({email})
        if (exists) {
            return res.json({success:false, message:"User already exists"})
        }

        // validating email
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }

        // validating strength of the password
        if(password.length < 8){
            return res.json({success:false, message:"Please enter a strong password"})
        }

        // encypting the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating a new user
        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true, token});

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"error while registering user"})
    }
}

export {loginUser, registerUser}