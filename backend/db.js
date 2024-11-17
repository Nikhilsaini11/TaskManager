const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://TaskManager:${process.env.MONGO_DB_PASSWORD}@cluster0.v2fhh.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=Cluster0`

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongo;