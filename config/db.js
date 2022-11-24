const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = async() => {
    const DBNAME = process.env.DB_NAME;
    const DBPASS = process.env.DB_PASSWORD;

    await mongoose
        .connect(
            `mongodb+srv://foodone:${DBPASS}@cluster0.kqlmezo.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
        )
        .then((response) => console.log("MongoDB is Connected !"))
        .catch((err) => console.log(err));
};

module.exports = ConnectDB;