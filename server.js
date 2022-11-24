const express = require("express");
const cors = require("cors");
const app = express();
const ConnectDB = require("./config/db");
const router = require("./routes/authRoute");
const routerBook = require("./routes/documentRoute");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

ConnectDB(); //<-- DB Connection

app.get("/", (req, res) => {
    res.send("Express Server ");
});

app.use(router);

app.use(routerBook);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    console.log("Express server is Active !");
});