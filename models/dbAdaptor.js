var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function saveClient(details){  // save new customers
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("Users");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.saveClient = saveClient;


  async function saveorder(details){  //save new order
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("Orders");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }

  exports.saveorder=saveorder;

  async function getproduct(){  // show iphone collection
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("appleStore");
    let collection = db.collection('Products');
    let res = await collection.find({}).toArray();
    return res;
  }
  

  exports.getproduct = getproduct;

  async function getmac(){  //show imac collection
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("appleStore");
    let collection = db.collection('imac');
    let res = await collection.find({}).toArray();
    return res;
  }
  

  exports.getmac = getmac;

  async function getwatch(){  //show watch collection
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("appleStore");
    let collection = db.collection('watch');
    let res = await collection.find({}).toArray();
    return res;
  }
  
  exports.getwatch = getwatch;

  async function SaveNewIphone(details){  // save new iPhone to mongo
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("Products");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.SaveNewIphone = SaveNewIphone;

  async function SaveNewImac(details){  // save new iPhone to mongo
    var client = new MongoClient(url, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("appleStore").collection("imac");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.SaveNewImac = SaveNewImac;
  
  
