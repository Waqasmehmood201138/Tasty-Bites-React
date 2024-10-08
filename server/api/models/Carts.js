const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    menuItemId : String,
    name: {
        type: String,
        minlength: 3,
        trim: true,
        required: true
    },
    recipe: String,
    image: String,
    price: Number,
    quantity: Number,
    email: {
        type: String,
        true: true,
        required: true
    }
})

const Carts = mongoose.model("Cart" , cartSchema)

module.exports = Carts;