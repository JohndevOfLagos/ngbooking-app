
import { MongoClient } from "mongodb"


if(!process.env.DB_URL){
    throw new Error("Mongodb URL not Found!")
}

const client = new MongoClient (process.env.DB_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
})

async function getDB(dbName) {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      console.log(">>>>>Connected to DB>>>>>>>")
      // Send a ping to confirm a successful connection
      return client.db(dbName);
    } catch(err) {
      // Ensures that the client will close when you finish/error
      console(err)
    }
  }
