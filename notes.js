const express =require ('express');
const notes =express();
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
var cors = require('cors');
//middlewares
// notes.use('/posts',()=>{
//     console.log('This is a middleware running')
// });
require('dotenv').config();

notes.use(bodyParser.json());
notes.use(cors());

//import routes
const postsRoute=require('./RouteS/posts');

notes.use('/posts',postsRoute);

notes.get('/',(req,res) => {
    res.send('We are on home');
});

const username=process.env.dbusername;
const password=process.env.dbpassword;
const dbName=process.env.dbname;

const uri =`mongodb+srv://${username}:${password}@cluster0.4ijsz.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true ,useUnifiedTopology: true});
const connection=mongoose.connection;

connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
})

notes.listen(3000);