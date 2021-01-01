const process = require("process") ;
const db = require("./Datastore") ;


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




// db.initializepath() ;
db.initializepath("C:/Users/RetailAdmin/Desktop/mydata.json") ;

db.create("part1" , myObj ) ;
db.create("part2" , myObj2 ) ;