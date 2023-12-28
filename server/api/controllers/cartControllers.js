const Carts = require('../models/Carts')

// get cart using email
const getCartByEmail = async (req, res) => {
    try {

        const email = req.query.email;
        const query = { email: email }
        const result = await Carts.find(query).exec();

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// post a cart when add-to-cart button clicked
const addToCart = async (req, res) => {

    const { menuItemId, name, recipe, image, price, quantity, email } = req.body;

    try {
        // if already added item found
        const existingCartItem = await Carts.findOne({ menuItemId })

        if (existingCartItem) {
            return res.status(400).json({ message: "Product already exist in the cart!" })
        }

        const cartItem = await Carts.create({

            menuItemId, name, recipe, image, price, quantity, email

            

        })
        console.log("cart added")

        res.status(200).json(cartItem)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}



module.exports = {
    getCartByEmail,
    addToCart
}