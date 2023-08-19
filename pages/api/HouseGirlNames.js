const express = require('express');
const HouseGirl = require('../../backend/models/HouseGirl');

export default async function handler(req, res) {
    try {
        const houseGirls = await HouseGirl.find({}, 'name');  // Select only the 'name' field from the HouseGirl model
        res.status(200).send(houseGirls);
    } catch (error) {
        res.status(500).send(error);
    }
  }
