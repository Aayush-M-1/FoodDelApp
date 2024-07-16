import Food from "../models/food.models.js"
import fs from 'fs'

// add food items

const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const food = new Food({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    })
    try{
        await food.save();
        res.json({success:true, message:"Food added"})
    }catch (error){
        console.log(error)
        res.json({success:false, message:"Error while adding food"})
    }
}

// listing all food

const listFood = async (req,res) => {
    try {
        const food = await Food.find({});
        res.json({success:true, data:food})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "error while listing food"})
    }
}

// remove food item

const removeFood = async (req,res) => {
    try {
        const food = await Food.findById(req.body.id)
        if(food){
            fs.unlink(`uploads/${food.image}`, ()=>{})
            await Food.findByIdAndDelete(req.body.id)
            res.json({success:true, message:"food removed"})
        }
        else res.json({success:false, message: "food item not found"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"error while removing food"})
    }
}

// search food functionality

const searchFood = async (req,res) => {
    try {
        const {search} = req.body;
        console.log(search);
        if(search){
            let foods = await Food.aggregate([
                {
                    $search: {
                      index: "foodsSearchIndex",
                      autocomplete: {
                        query: search,
                        path: "name"
                      }
                    }
                }
            ])
            res.json({success:true, data:foods});
        }
        else{
            res.json({success:false, message:"Type Something"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error while searching food"})
    }
}

export {addFood, listFood, removeFood, searchFood}