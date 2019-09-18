const CustomerModel = require('../models/customermodel');
const express = require("express");
const router = express.Router();

router.post('/customer', (req, res) => {
   if(!req.body) {
       return res.status(400).send("Request body missing!");
   }
   let model = new CustomerModel(req.body);
   model.save()
     .then( doc => {
         return res.status(200).send(doc);
     })
     .catch( err => res.status(500).send(err));
})

module.exports = router;