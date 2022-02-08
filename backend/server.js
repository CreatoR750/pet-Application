const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const config = require("./config/db");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(config.url, (err, database) => {
    if (err) return console.log(err);

    app.post("/animals", (req, res) => {
        console.log(req.body);

        var id = Math.floor(Math.random(10) * 100);
        const animal = { id: id, name: req.body.name, type: req.body.type, color: req.body.color, age: req.body.age, gender: req.body.gender };
        console.log(animal);
        var cursor = db.collection("AnimalsCollection").insertOne(animal, (err, result) => {
            if (err) {
                res.send({ error: "An error has occurred" });
            } else {
                res.send(result);
            }
        });
    });

    app.get("/animals", (req, res) => {
        db = database.db("Animals");
        var cursor = db
            .collection("AnimalsCollection")
            .find()
            .toArray(function (err, result) {
                if (err) {
                    return console.log(err);
                }
                res.send(result);
            });
    });

    app.get("/animals/:id", (req, res) => {
        var ObjectID = require("mongodb").ObjectID;
        let id = parseInt(req.params.id);
        var cursor = db.collection("AnimalsCollection").findOne({ id: id }, (err, result) => {
            if (err) {
                return console.log(err);
            }
            res.send(result);
        });
    });

    app.delete("/animals/:id", (req, res) => {
        console.log(req.params.id);
        let id = parseInt(req.params.id);
        var cursor = db.collection("AnimalsCollection").deleteOne({ id: id }, (err, result) => {
            if (err) {
                return console.log(err);
            }
            res.send(result);
        });
    });

    app.put("/animals/:id", (req, res) => {
        console.log(req.params.id);
        let id = parseInt(req.params.id);
        const animal = { id: id, name: req.body.name, type: req.body.type, color: req.body.color, age: req.body.age, gender: req.body.gender };
        var cursor = db.collection("AnimalsCollection").replaceOne({ id: id }, animal, (err, result) => {
            if (err) {
                return console.log(err);
            }
            res.send(result);
        });
    });

    app.listen(port, () => {
        console.log("We are live on " + port);
    });
});
