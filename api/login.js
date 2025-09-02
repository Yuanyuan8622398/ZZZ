const mongoose = require("mongoose");
const ZZZModel = require("../server/models/ZZZ");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default async function handler(req, res) {
  if (req.method === "POST") {
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
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
