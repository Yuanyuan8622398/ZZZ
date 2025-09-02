const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ZZZModel = require('./models/ZZZ')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI);

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    ZZZModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("Cannot find your email")
        }
    })
})

app.post('/register', (req, res) => {
    ZZZModel.create(req.body)
    .then(zzz => res.json(zzz))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})
