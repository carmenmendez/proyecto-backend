const express = require('express');
const router = express.Router();

router.get('/scoreboards/:gameSlug', (req, res) => {
    const gameSlug = req.params.gameSlug;
    const filteredScoreboards = scoreboards.filter((scoreboard) => {
        return scoreboard.gameSlug === gameSlug
    })

    if(filteredScoreboards.length > 0) {
        return res.json({
            error: null,
            scoreboards: filteredScoreboards
        })
    }

    res.status(404)
    return res.json({
        error: 'No scoreboards found for this game'
    })
})

// create a scoreboard of a specific game
router.post('/scoreboards/:gameSlug', (req, res) => {
    const gameSlug = req.params.gameSlug;
    const { gameName, players } = req.body;

    // add the scores of the players
    const playersUpdated = players.map((player) => {
        let scoreTotal = 0;
        player.scores.forEach((score) => {
            scoreTotal += score.scoreValue
        })
        player.total = scoreTotal;
        return player;
    })

    const scoreboard = {
        id: Math.round(Math.random() * 1000000), // temporay fake Id
        createdAt: new Date(),
        gameSlug,
        gameName,
        players: playersUpdated
    }

    scoreboards.push(scoreboard)

    console.log('Scoreboards: ', scoreboards)

    return res.json({
        error: null,
        scoreboard
    })
})

// get all scoreboards for a game
router.get('/scoreboards/:gameSlug/:scoreId', (req, res) => {
    const gameSlug = req.params.gameSlug;
    const scoreId = req.params.scoreId;
    const scoreboard = scoreboards.find( (scoreboard) => {
        return scoreboard.id == scoreId && scoreboard.gameSlug === gameSlug
    })

    if (scoreboard === undefined) {
        res.status(404)
        return res.json({
            error: 'Score board not found'
        })
    }

    return res.json({
        error: null,
        scoreboard,
    })
})

module.exports = router