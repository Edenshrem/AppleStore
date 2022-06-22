const express = require('express')
const app = express()
const port = 3000
const mydb = require('./models/dbAdaptor')


app.use(express.static('public'))

app.get('/addCustomers', (req, res) => {
  var newClient= 
  {
    name:req.query.name,
    ID:req.query.id,
    email:req.query.email,
    password:req.query.password 
  }
  async function mysave(details) {
    await mydb.saveClient(details).then((result) => res.redirect('index.html'));
  }
  mysave(newClient);
  
})

app.get('/addorder', (req, res) => {
  var neworder= 
  {
    name:req.query.name,
    address:req.query.address,
    city:req.query.city

  }
  async function myorder(details) {
    await mydb.saveorder(details).then((result) => res.send(result));
  }
  myorder(neworder);
  
})

app.get("/getiphone", (req, res) => {
  async function getData() {
    await mydb.getproduct().then((result) => res.send(result));
  }
  getData();
});


    

app.get("/getimac", (req, res) => {
  async function myData() {
    await mydb.getmac().then((result) => res.send(result));
  }
  myData();
});  

app.get("/getwatch", (req, res) => {
  async function watchData() {
    await mydb.getwatch().then((result) => res.send(result));
  }
  watchData();
});  

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })