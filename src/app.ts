import express from "express";
import mongoose from 'mongoose';
import product from "./routes/products/products";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_CONNECTION || 'mongodb://localhost/aws_test_db')
    .then(() => {
        console.log("Mongodb Connected");
    }).catch((e) => {
        console.log("Mongodb Connection Failed");
        console.log(e)
    });

mongoose.Promise = global.Promise;

app.use("/product/", product)

app.get("/", (req, res) => {
    res.send("Hello Tester")
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server Running Successfully at " + port));