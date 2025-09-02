const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ZZZModel = require("../models/ZZZ");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await ZZZModel.findOne({ email });
        if (!user) return res.json("Cannot find your email");
        if (user.password === password) {
            res.json("Success");
        } else {
            res.json("The password is incorrect");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

app.post('/register', async (req, res) => {
    try {
        const zzz = await ZZZModel.create(req.body);
        res.json(zzz);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = app;
