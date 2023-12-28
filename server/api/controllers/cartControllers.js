const Carts = require('../models/Carts')

// get cart using email
const getCartByEmail = async(req, res) => {
    try {

        const email = req.query.email;
        const query = {email: email}
        const result = await Carts.find(query).exec();
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getCartByEmail
}