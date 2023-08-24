const express = require('express');
const router = express.Router()
const axios = require('axios');

router.get('/:search', (req, res) => {

    const searchQuery = req.params.search;

    console.log("my giphy API key:", process.env.GIPHY_API_KEY)
    const apiKey = process.env.GIPHY_API_KEY;

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=25&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`)
        .then(response => {
            console.log("success retreiving GIPHYs related to:", searchQuery);
            res.send(response.data);
        })
        .catch(error => {
            console.error("error retrieving gifs:", error);
            res.sendStatus(500);
        })
})

module.exports = router;