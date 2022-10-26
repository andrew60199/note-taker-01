const express = require('express')
const router = express.Router()
const path = require('path')

router.route('/')
    .get((req, res, next) => {
        console.log(`Hello World`)
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'notes.html'))
    })
    .post()
    .delete()


module.exports = router 