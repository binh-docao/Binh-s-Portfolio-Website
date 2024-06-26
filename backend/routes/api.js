// in routes/api.js
const express = require('express');
const router = express.Router();
const HouseGirl = require('../models/HouseGirl');

router.post('/HouseGirl', async (req, res) => {
    try {
        const newHouseGirl = new HouseGirl(req.body);
        await newHouseGirl.save();
        res.status(201).send(newHouseGirl);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/HouseGirlNames', async (req, res) => {
    try {
        const houseGirls = await HouseGirl.find({}, 'name');  // Select only the 'name' field from the HouseGirl model
        res.status(200).send(houseGirls);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/HouseGirlDietary/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const houseGirl = await HouseGirl.findOne({ name });
        
        if (!houseGirl) {
            return res.status(404).send({ message: 'House girl not found' });
        }

        res.status(200).send({ dietaryRestrictions: houseGirl.dietaryRestrictions });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
