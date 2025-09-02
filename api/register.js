const mongoose = require("mongoose");
const ZZZModel = require("../server/models/ZZZ");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const zzz = await ZZZModel.create(req.body);
      res.status(200).json(zzz);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
