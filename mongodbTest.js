const { MongoClient, ServerApiVersion } = require('mongodb');

// Directly using your connection string
const uri = "mongodb+srv://riteshchandra122:lzFflIC8lvphHRjj@cluster0.yuxmzkc.mongodb.net/test";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);