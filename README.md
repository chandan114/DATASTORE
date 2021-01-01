# FRESHWORKS_TEST

### Discription
1. Node.js is been used for the implementation purpose

2. schedule-node module is been installed for the scheduling jobs(cron)

3. File System core module is used for File manipulation

4. program is been tested on Windows 10


### Functional Components.

1. Can be initialized by creating the objects with an optional path parameter
  > const db  = require(Datastore) ;</br>
  > const client = new db("path")

2. Create operation - it accepts 3 parameters(key , value , time_to_alive(optional) ) where key is capped at 32chars and value is json onject capped at 16kb.
  > key passed should be string<br/>
  > client.create(key , value)
 
3. if create invoked for existing key exception is thrown Key is alredy present
 
4. Read operation - it accepts 1 parameters(key)
  > client.Read(key)
 
5. Delete Operatin - it accepts 1 parameter(key)
  > client.Delete(key)

6. create has an option parameter time_to_alive which accepts time integer as seconds. which uses cron.

### Non-functional requirements

1. size of file is capped at 1gb

2. if a client tries to create a already existing file or file which is used by the other client exception is thrown.
  > this is tried to achived by Bool status in file

3. Thread safety can be achived by Syncronized calls therefore create , reads  is been  implemented as sync to maintain thread safety so garbage read or writes cant be done.
