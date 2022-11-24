const express = require("express");
const UserModel = require("../model/user");

const router = express.Router(); //<--- this is for routing

/*---------------CREATE A NEW ACCOUNT REQUEST------------- */

router.post("/singup", async(req, res) => {
    const { name, email, password } = req.body;

    const UserEmail = await UserModel.findOne({ email: email });
    if (UserEmail) {
        res.send({ message: "This Email Already used" });
    } else {
        const User = new UserModel({
            name: name,
            email: email,
            password: password,
        });
        User.save((err) => {
            if (err) {
                res.send({ message: "Invalid Input" });
            } else {
                res.send({ message: "Registration Successfully Complete" });
            }
        });
    }
});

/*------------------LOGIN REQUEST---------------- */

router.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const User = await UserModel.findOne({ email: email });
    if (User) {
        if (User.password === password) {
            res.send({ message: "Successfully Login" });
        } else {
            res.send({ message: "Incorrect Email or Password" });
        }
    } else {
        res.send({ message: "Incorrect Email or Password" });
    }
});

module.exports = router;