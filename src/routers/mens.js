// First create router
const express = require('express');
const router = new express.Router();
// get the model from src/models folder
const MensRanking = require('../models/mens');


//Create Post route to insert in MensRanking model as well as collection
router.post('/api/menOlympic', async(req,res) =>{
    try{
        const insertMens = new MensRanking(req.body);
        const insert_mens = await insertMens.save();
        res.status(201).send(insert_mens);
    }
    catch(e) {
        res.status(400).send(e);
    }
});

//Get all mensRanking list
router.get('/api/menOlympic', async(req,res) =>{
    try{
        const get_all_mens = await MensRanking.find().sort({"ranking":1});
        res.status(200).send(get_all_mens);
    }
    catch(e) {
        res.status(400).send(e);
    }
});

//Get particular mensRanking object 
router.get('/api/menOlympic/:id', async(req,res) =>{
    try{
        const _id = req.params.id;
        // const get_mens = await MensRanking.findById({_id:_id});
        // As key and value same so can be written like this
        const get_mens = await MensRanking.findById(_id);

        res.status(200).send(get_mens);
    }
    catch(e) {
        res.status(400).send(e);
    }
});

//Update particular mensRanking object through Patch request for individual update
router.patch('/api/menOlympic/:id', async(req,res) =>{
    try{
        const _id = req.params.id;
        const get_mens = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});

        res.status(200).send(get_mens);
    }
    catch(e) {
        res.status(500).send(e);
    }
});

//Delete particular mensRanking object through Delete request
router.delete('/api/menOlympic/:id', async(req,res) =>{
    try{
        const get_mens = await MensRanking.findByIdAndDelete(req.params.id);

        res.status(200).send(get_mens);
    }
    catch(e) {
        res.status(500).send(e);
    }
});

module.exports = router;