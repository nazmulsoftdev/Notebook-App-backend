const { Schema, model } = require("mongoose");

const DocumentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    bookContent: {
        type: String,
        required: true,
    },
});

const documentModel = model("nootbooks", DocumentSchema);

module.exports = documentModel;