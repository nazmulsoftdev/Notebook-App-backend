const express = require("express");
const documentModel = require("../model/document");

const routerBook = express.Router();

// all book list

routerBook.get("/booksList", async(req, res) => {
    await documentModel
        .find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

// books post request

routerBook.post("/addNoote", (req, res) => {
    const { title, dob, bookContent } = req.body;

    const result = new documentModel({
        title: title,
        dob: dob,
        bookContent: bookContent,
    });

    result
        .save()
        .then((response) => res.send({ message: "Successfully Add New" }))
        .catch((err) => console.log(err));
});

// put request

routerBook.put("/bookList/:id", async(req, res) => {
    const id = req.params.id;
    await documentModel
        .findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .exec()
        .then((response) => {
            res.send({ message: "Successfully Updated" });
        })
        .catch((err) => {
            res.send({ message: "Sorry can not update" });
        });
});

// delete request

routerBook.delete("/booksList/:id", async(req, res) => {
    const id = req.params.id;

    await documentModel
        .findByIdAndDelete(id)
        .exec()
        .then((response) => res.send({ message: "Successfully Delete" }))
        .catch((err) => res.send({ message: "Can not delete" }));
});

module.exports = routerBook;