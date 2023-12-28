const mongoose = require('mongoose');
const { Schema } = mongoose;

// create schema object for menu items
const menuSchema = new Schema({

    name: {
        type: String,
        minlength: 3,
        trim: true,
        required: true
    },
    recipe: String,
    image: String,
    category: String,
    price: Number

})

// create Model
const Menu = mongoose.model("Menu", menuSchema)

module.exports = Menu;