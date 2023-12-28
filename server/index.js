const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3001

const app = express()

require('dotenv').config()


//  middleware
app.use(cors())
app.use(express.json())

//  import routes here
const menuRoutes = require('./api/routes/menuRoutes')
app.use('/menu', menuRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// mongodb configuration
/////////////////////////////////////////////////////////////////////////////////////////////////

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@tasty-bites-react.6vr6l1y.mongodb.net/?retryWrites=true&w=majority`);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////


