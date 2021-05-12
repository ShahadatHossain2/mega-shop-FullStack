const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;

console.log(process.env.DB_USER);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 5000;



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vgg4u.mongodb.net/megaShop?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const productCollection = client.db("megaShop").collection("products");
    const checkOutCollection = client.db("megaShop").collection("checkout");
    console.log('database connected');

    app.post('/addProduct', (req, res) => {
        const product = req.body;
        productCollection.insertOne(product)
            .then(result => console.log('insert one'))
    })

    app.get('/products', (req, res) => {
        productCollection.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

    app.get('/product/:id', (req, res) => {
        productCollection.find({ _id: objectId(req.params.id) })
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

    app.post("/addCheckout", (req, res) => {
        const booking = req.body;
        checkOutCollection.insertOne(booking)
            .then(result => {
                res.send(result.insertedCount > 0);
            })
    })

    app.get("/orders", (req, res) => {
        checkOutCollection.find({ email: req.query.email })
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    app.delete('/delete/:id', (req, res) => {
        productCollection.deleteOne({ _id: objectId(req.params.id) })
            .then(result => {
                res.send(result.deletedCount > 0);
            })
    })

});


app.get('/', (req, res) => {
    res.send("Hello From Mega Shop Server");
})

app.listen(process.env.PORT || port)