let express=require("express")
let app=express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.get("/",(req,res)=>{
    res.send("Server says Hello")
})
app.post("/sendData",(req,res)=>{
    console.log("hello")
    console.log(req)
    manipulatedString=manipulateString(req.body.data);
    res.send(""+manipulatedString)
})

app.listen(3001,(req,res)=>{
    console.log("Server is Running")
})

function manipulateString(str){
    return str+"World";
    //Simluating the server side processing. (Logic)
}