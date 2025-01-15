
const { MongoClient } = require("mongodb")
const url = "mongodb+srv://username:password@myfirstdatabasecluster.x4ude.mongodb.net/"

const client = new MongoClient(url)

const dbName = "UserDB"

async function main(){
    await client.connect();
    console.log("Node to mongodb connection made successfully")
    const db = client.db(dbName)
    // const newUser = {
    //     "name": "Abhishek",
    //     "spouseName": "Sweta",
    //     "childName" : "Abhyunsh"
    // }
    const collection = db.collection('UserCollection')
    //const newData = await collection.insertOne(newUser);
    //console.log("data Added =>", newData)
const updatedDocument = {
        "name": "Abhishek Bharadwaj",
        "spouseName": "Sweta",
        "childName" : "Abhyunsh"
    }
    const updatedUser = await collection.updateOne({name: "Abhishek"}, { $set: updatedDocument})
    console.log("data Updated =>", updatedUser)

    const data = await collection.find({}).toArray()
    console.log("data fetched =>", data)
    return "done."
}

main().
then(console.log).
catch(console.error).
finally(()=>client.close())