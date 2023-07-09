const express = require('express');
const router = express.Router();
const {user} = require('../models');

router.get('/', async (req, res) => {
    const userlist = await user.findAll();
    res.json(userlist);
});


router.post('/', async (req, res) => {
    const useradd = req.body;
    await user.create(useradd);
    res.json(useradd);
})



module.exports = router
