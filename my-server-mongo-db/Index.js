const express = require("express");
const app = express();
const port = 3002;
const morgan = require("morgan");
app.use(morgan("combined"));
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.listen(port, () => {
    console.log(`My Server listening on port ${port}`);
});
app.get("/", (req, res) => {
    res.send("This Web server is processed for MongoDB");
});
const { MongoClient, ObjectId } = require("mongodb");
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");

app.get("/fashions", cors(), async (req, res) => {
    const result = await fashionCollection.find({}).toArray();
    res.send(result);
});
app.get("/fashions/:id", cors(), async (req, res) => {
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    res.send(result[0]);
});
app.post("/fashions", cors(), async (req, res) => {
    //put json Fashion into database
    await fashionCollection.insertOne(req.body);
    //send message to client(send all database to client)
    res.send(req.body);
});

userCollection = database.collection("User");

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .send({ message: "Username and password are required" });
    }
    try {
        const user = await userCollection.findOne({ username, password });
        if (user) {
            res.send({ message: "Login successful" });
        } else {
            res.status(401).send({ message: "Invalid username or password" });
        }
    } catch (error) {
        res.status(500).send({ message: "Error logging in", error });
    }
});
