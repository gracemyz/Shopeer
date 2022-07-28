const { MongoClient, ObjectId } = require("mongodb")  // this is multiple return
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0"
const mongoClient = new MongoClient(uri)
const user_collection = mongoClient.db("shopeer_database").collection("user_collection")
mongoClient.connect()

module.exports = user_collection