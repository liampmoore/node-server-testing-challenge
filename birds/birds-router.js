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


router.get("/:id", async (req, res) => {
    try {
        const bird = await Birds.findById(req.params.id)
        res.status(200).json(bird)
    }
    catch(err) {
        console.error(err)
    }
})

router.post("/", async (req, res) => {
    try {
        const newBird = await Birds.insert(req.body);
        res.status(201).json(newBird);
    }
    catch(err) {
        console.error(err)
        res.status(500).json({error: "Server error."})
    }
})

module.exports = router;