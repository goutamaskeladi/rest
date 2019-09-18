const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const personRoute = require('./routes/person');
const customerRoute = require('./routes/customer');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(personRoute);
app.use(customerRoute);
app.use((req, res, next) => {
    res.status(404).send("<h2>The page you are looking for doesn't exist!</h2>");
})
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.sendFile(path.join(__dirname, "../public/error.html"));
})
app.listen(PORT, () => console.log("Server is running on port:", PORT)); 