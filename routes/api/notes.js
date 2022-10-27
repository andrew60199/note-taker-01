const express = require('express')
const router = express.Router()
const path = require('path')
const dataPath = require('../../db/db.json')
const fs = require('fs')


router.route('/')
    .get((req, res, next) => {
        
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'notes.html'))

        // Function that reads the data in our mock database and then inserts it into the unordered list in notes.html
        // Actually we might just need to send back the data and the index.js will do the rest for us...

        // fs.readFile('../../db/db.json').then((data) => res.json(JSON.parse(data)))

        // res.json(data)

        // readFile('../../db/db.json', (err, data) => {
        //     if (err) throw err;
        //     console.log(data);
        // });

        // readFile(pathToData, 'utf8', (err, data) => {
        //     if (err) {
        //       console.error(err);
        //     } else {
        //       // const parsedData = JSON.parse(data);
        //       console.log(data)
        //     }
        // });

        // readFromFile(pathToData)
        //     .then((data) => JSON.parse(data))
        //     .then((json) => {
        //         res.json(json);
        //     });

        fs.readFile(path.join(__dirname, '..', '..', 'db', 'db.json'), 'utf8', (err, data) => {
            if (err) throw err
            console.log(data)
            // res.json(JSON.parse(data))
        }) // .then((data) => res.json(JSON.parse(data)))




    })
    .post()
    .delete()


module.exports = router 