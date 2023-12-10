const mongoose = require('mongoose');


// const URI = "mongodb://127.0.0.1:27017/mern_admin";
//mongoose.connect(URI);

const URI = process.env.MONGODB_URI 

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection suCCessfuLL");
    } catch (error) {
        console.log("database coNNEction failed");
        process.exit(0)
    }
}

module.exports = connectDb;