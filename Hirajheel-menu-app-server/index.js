const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;



//Hirajheel-Admin
//zhaFWkfMCaIYnmk0

//Middleware
app.use(cors());
// app.use(bodyParser.json({ limit: '100mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

app.use(express.json());



app.get('/', (req, res)=>{
    res.send('Hirajheel menu app server is ready!!!');
})


app.listen(port, ()=>{
    console.log(`SERVER IS RUNNING at port!! : ${port}`);  
})

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.x8jrhpw.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db("menuDB");
const menuFoodCollection = database.collection("products");
const cartProductsCollection = database.collection("cart_products");

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
  
      app.get('/foods', async (req, res) =>{
          const cursor = menuFoodCollection.find();
          const result = await cursor.toArray();
          res.send(result);
        })
  
        app.get('/cart_products', async (req, res) =>{
          const cursor = cartProductsCollection.find();
          const result = await cursor.toArray();
          res.send(result);
        })
      //api for getting one product
      app.get('/foods/:id', async (req, res) =>{
          const id = req.params.id;
          const query = {_id: new ObjectId(id)};
          const product = await menuFoodCollection.findOne(query);
          res.send(product);
        })
  
      //create data or insert a data to database
      app.post("/foods", async (req, res) => {
          console.log(req.body);
          const newFood = req.body;
          const result = await menuFoodCollection.insertOne(newFood);
          res.send(result);
          console.log(result);
          
      });
      app.post("/cart_products", async (req, res) => {
          console.log(req.body);
          const newCartProduct = req.body;
          const result = await cartProductsCollection.insertOne(newCartProduct);
          res.send(result);
        });
  
      //delete data
      app.delete('/cart_products/:cid', async(req, res) => {
          const id  = req.params.cid;
          console.log(`PLEASE DELETE ID FROM DATABASE: ${id}`);
          const query = { _id: new ObjectId(id)};
          console.log(query);
          
          const result = await cartProductsCollection.deleteOne(query);
          res.send(result);
        })
      //update data
      app.put('/foods/:id', async (req, res) => {
          const id = req.params.id;
          const toBeUpdatedProduct = req.body;
          console.log(toBeUpdatedProduct);
          const query = { _id: new ObjectId(id)};
          const options = { upsert: true };
          const updateProduct = {
            $set: {
              name:toBeUpdatedProduct.fName,
              image:toBeUpdatedProduct.fImage,
              foodType:toBeUpdatedProduct.fFoodType,
              price:toBeUpdatedProduct.fPrice,
            }
          }
          const result = await menuFoodCollection.updateOne(query, updateProduct, options);
          res.send(result);
        })
  
      // Send a ping to confirm a successful connection
      //await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
     // await client.close();
    }
  }
  run().catch(console.dir);