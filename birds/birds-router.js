const express = require('express');

const router = express.Router()

const Birds = require('./birds-model');

router.get("/", async (req, res) => {
    try {
        const birds = await Birds.getAll();
        res.status(200).json(birds)
    }
    catch(err) {
        console.error(err)
        res.status(500).json({error: "Server error."})
    }

})

module.exports = router;