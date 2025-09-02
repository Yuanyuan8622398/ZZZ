import mongoose from "mongoose";
import ZZZModel from "../server/models/ZZZ";

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, password, name } = req.body;

        if (req.url.includes("/login")) {
            const user = await ZZZModel.findOne({ email });
            if (!user) return res.json("Cannot find your email");
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("The password is incorrect");
            }
        } else if (req.url.includes("/register")) {
            const zzz = await ZZZModel.create({ name, email, password });
            res.json(zzz);
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
