const express = require('express')
const path = require('path')
const fs = require('fs/promises')
const { v4: uuid } = require('uuid');

const router = express.Router()

const pathToDB = path.join(__dirname, '..', '..', 'db', 'db.json')

router.route('/notes')
    .get( async (req, res) => {
        
        // Retrieve the notes from the JSON database and send it back to the front end... 
        // Need to wrap async and await functions in a try catch block
        try {
            let notes = JSON.parse(await fs.readFile(pathToDB))

            res.status(200).json(notes)

        } catch (err) {

            res.sendStatus(500)
        }

    })
    .post( async (req, res) => {
        
        try {
            // Add the received note and add it to the database
            // console.log(req.body)

            let notes = JSON.parse(await fs.readFile(pathToDB))

            const newNote = {
                id: uuid(),
                title: req.body.title,
                text: req.body.text
            }

            notes.push(newNote)

            await fs.writeFile(pathToDB, JSON.stringify(notes))

            // Then return the new note back to the client!
            res.status(200).json(newNote)

        } catch (err) {

            res.sendStatus(500)
        }

    })

router.route('/notes/:id')
    .delete( async (req, res) => {
        
        try {

            // Determine what the notes UUID is
            const noteToDeleteID = req.params.id

            // Read through the array(database) and find that note
            let notes = JSON.parse(await fs.readFile(pathToDB))

            const noteSearch = note => note.id === noteToDeleteID

            const noteIndex = notes.findIndex(noteSearch)
            // console.log(noteIndex)

            // Remove that note - object
            notes.splice(noteIndex, 1)

            // Update the database
            await fs.writeFile(pathToDB, JSON.stringify(notes))

            // Then send back the new notes list 
            res.status(200).json(notes)

        } catch (err) {

            res.sendStatus(500)
        }

    })


module.exports = router 