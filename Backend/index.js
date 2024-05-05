const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

//midleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fhwdeyh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const projectCollection = client.db(`portfolio`).collection("project");

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Backend Server is running...");
});

app.post("/project", async (req, res) => {
  const user = req.body;
  //   console.log(user);
  const result = await projectCollection.insertOne(user);
  console.log(result);
  res.send(result);
});
app.get("/project", async (req, res) => {
  const result = await projectCollection.find().toArray();
  res.send(result);
});

app.get("/project/:id", async (req, res) => {
  const id = req.params.id;
  const query = {
    _id: new ObjectId(id),
  };
  const result = await projectCollection.findOne(query);
  console.log(result);
  res.send(result);
});
app.delete("/project/:id", async (req, res) => {
  const id = req.params.id;
  console.log("delete", id);
  const query = {
    _id: new ObjectId(id),
  };
  const result = await projectCollection.deleteOne(query);
  console.log(result);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Simple Crud is Running on port ${port}`);
});
