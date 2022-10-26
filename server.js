const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Serve static files within the public folder
app.use(express.static(path.join(__dirname, '/public')))

// GET Route for homepage
app.use('/', require('./routes/root')) 

// Route to access notes
app.use('/notes(.html)?', require('./routes/api/notes')) 

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
)