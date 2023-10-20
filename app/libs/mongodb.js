const { default: mongoose } = require("mongoose")

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect to mongodb")
    } catch (error) {
        console.log(error);
        
    }
}
export default connectToMongoDB;