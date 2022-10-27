const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Serve static files within the public folder
app.use(express.static(path.join(__dirname, '/public')))

// GET Route for HTML routes
app.use('/', require('./routes/root')) 

// Route to access the api
app.use('/api', require('./routes/api/notes')) 

// Default / catch all route
// Normally used for 404... 
app.use('/*', require('./routes/root')) 

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
)