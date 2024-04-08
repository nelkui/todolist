const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://todoo:GydAeagO24v0m09XQGCh0CAGi4NiMTxBpfFOLlwrihwuQd7fHFlcrQj6dbQNe06NEpS4VrUXX9TZACDbOALZfg==@todoo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@todoo@';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to Azure Cosmos DB');
    } catch (err) {
        console.error('Error connecting to Azure Cosmos DB:', err);
    }
}

// Call the function to connect
connectToMongoDB();

const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('TodoTask', todoTaskSchema);
