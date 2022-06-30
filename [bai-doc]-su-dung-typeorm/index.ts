import express from "express";
import bodyParser from "body-parser";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res, next) => {
    res.json("Hello World!");
    next();
})

app.listen(PORT, () => {
    console.log("You are listening on port", PORT);
});

