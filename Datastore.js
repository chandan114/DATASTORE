const fs = require("fs");
const schedule = require('node-schedule') ;
const pathfinder = require('path') ;

class Datastore{

constructor(path = `${__dirname}/text.json`){
    this.dpath = path ;

    const datastore = {

        "status" : true
    }

    

        if(fs.existsSync(this.dpath)){
            
            
            this.data = fs.readFileSync(this.dpath , "utf-8") ;
            this.obj = JSON.parse(this.data) ;
            if(this.obj.status){
                throw new Error( `File is alredy present or used by some other client ` ) ; 
            }
    }


    fs.writeFileSync(this.dpath , JSON.stringify(datastore)) ;
    this.data = fs.readFileSync(this.dpath , "utf-8") ;
    this.obj = JSON.parse(this.data) ;
}

create = (key , value  , Time_to_Live = -1) =>{

    if(Time_to_Live!==-1){

        
        schedule.scheduleJob(key , `*/${Time_to_Live} * * * * *` , ()=>{
            Delete(key) ;
            schedule.cancelJob(key) ;
          })
    }

    const size = Buffer.byteLength(JSON.stringify(value) );
    const sats = fs.statSync(this.dpath) ;

    

        if(this.obj[key]){
            throw new Error(`alredy present`) ;
        }


        if(  (sats.size/3072) >  1 ) {

            throw new Error(`File is above 1GB `)

        }
            

           

        if(size/1024 > 16*1024){

            throw new Error("value this.object size greater than 16kb") ;
        }
        
                    
        
        if(typeof key == "string" && key.length<=32){
            this.data = fs.readFileSync(this.dpath , "utf-8") ;
            this.obj = JSON.parse(this.data) ;
            this.obj[key] = value ;
            fs.writeFileSync( this.dpath , JSON.stringify(this.obj , null , 2)) ;
        }else{
                
            throw new Error(`Your Entered key:${key} is invalid`) ;
        }
                       

}
/**
 * @param {string} key
 */

Read  = ( key ) => {

    

        if(this.obj[key]){
            return this.obj[key] ;
        }else{
            throw new ("key not present") ;
        }
    
    
}


Delete  = (key) =>  {



        if(this.obj[key]){
            delete this.obj[key] ;
    fs.writeFileSync( this.dpath , JSON.stringify(this.obj , null , 2)) ;
        }else{
            throw new Error (`provide key not present`) ;
        }


    
}

}


module.exports =  Datastore ;