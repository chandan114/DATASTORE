const process = require("process") ;
const fs = require("fs");
const Datastore = require("./Datastore")
// const path = require('path') ;


const s = "chandan" ;
const myObj = {
    "name":"John",
    "age":30,
    "cars": {
      "car1":"Ford",
      "car2":"BMW",
      "car3":"Fiat"
    }
    
   }

const myObj2 = {
    "name":"chadnan",
    "age":10,
    "cars": {
      "car1":"Ford",
      "car2":"BMW",
      "car3":"Fiat"
    }
    
   }

const myObj3 = {
    "a": null,
    "age":10,
   }


const client1 = new Datastore() ;
const client2 = new Datastore(`${__dirname}/hello.json`) ;


client2.create("ss" , myObj) ;
client1.create("hello" , myObj ) ;
// client1.create("bye" , myObj2 , 5 ) ;


client1.create("bye" , myObj2 ) ;
client1.Delete("bye") ;

// const ddd  = client1.Read("hello") ;
// console.log(ddd.age)
// csdcs