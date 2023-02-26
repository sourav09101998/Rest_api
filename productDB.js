require("dotenv").config();
const connectDB = require("./db/dbConnect");
const Product = require("./models/product");

const ProductJson = require("./rooms.json");

const start = async () => {
    try {

        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    }

    catch (error) {
        console.log(error);
    }
}

start();

