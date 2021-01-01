const process = require("process") ;
const fs = require("fs");
const gs = require("fs");
const Datastore = require("./Datastore")




const myObj = {
    "name":"John",
    "age":30,
    "cars": {
      "car1":"Ford",
      "car2":"maruti",
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


const client1 = new Datastore() ;   // initializing datastore without path
const client2 = new Datastore(`${__dirname}/hello.json`) ;  // initializing datastore with path


client2.create("john" , myObj) ;    // creating client object
client1.create("chandan" , myObj ) ;  // creating client object

const obj  = client1.Read("chandan") // reach key = chandan from client1's file
console.log(obj.age); // getting age using object
client1.Delete("chandan") ; // deleting the Key chandan from file text.json
