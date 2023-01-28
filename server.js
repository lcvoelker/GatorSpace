const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected successfully"))
// warning
mongoose.set('strictQuery', true);
//^^^ or could set to false


app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)
app.listen(3000, () => console.log("Server started on port 3000"))