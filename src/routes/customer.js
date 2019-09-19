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

router.get('/customer', (req, res) => {
    if(!req.query.email) {
       return res.status(400).send("Email is missing!");
    }
    CustomerModel.findOne({
        email : req.query.email
    })
    .then(doc => res.json(doc))
    .catch(err => res.status(500).json(err));
})

router.put('/customer', (req, res) => {
    if(!req.query.email) {
        return res.status(400).send("Email is missing!");
    }
    CustomerModel.findOneAndUpdate({
        email : req.query.email
    }, {
        name : req.query.name
    })
    .then( doc => res.json(doc))
    .catch( err => res.status(500).send(err))
})

router.delete('/customer', (req, res) => {
    if(!req.query.email) {
        return res.status(400).send("Email is missing!");
    }
    CustomerModel.findOneAndDelete({
        email : req.query.email
    })
    .then( doc => res.json(doc))
    .catch( err => res.status(500).send(err))
})

module.exports = router;