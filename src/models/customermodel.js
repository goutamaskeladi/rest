const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://goutam:Mig29@graphql-swjxr.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

mongoose.connection.once('open', () => {
    console.log('Connected to mongodb database');
})

let CustomerSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        required : true,
        unique : true
    }
});

module.exports = mongoose.model("Customer", CustomerSchema);