const {MongoClient}=require('mongodb');

async function userInsert(course){
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);
await client.connect();
const database = client.db('test');
const collection=database.collection('user');

var value = collection.insertOne(course);
client.close();//to avoid memory leaks.
return value;
}
async function userDisplay(){
    const url = 'mongodb://localhost:27017/';
    const client = new MongoClient(url);
    client.connect();
    const database = client.db('test');
    console.log('DB connected');
    const collection=database.collection('user');
    //client.close();//to avoid memory leaks.
    var output=await collection.find();
    
    //await client.close();
    return output.toArray();
    }
module.exports={userInsert,userDisplay};