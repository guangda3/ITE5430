## ITE5430

## Assignment for week2

## Download and install *Docker* on your local system

## Use the quickstart to start the *Docker* terminal

### We are installing MongoDB via Mongo Docker Image which already has the MongoDB installed
	* Run the following command
	
	'winpty docker run --name my-mongo -d mongo:3.4.18-jessie'
	
	* This will serve as the Mongo Server that is holding the MongoDB

### Leave that Docker terminal open and open a new Git Bash terminal
	* Run the following command
	
	'winpty docker run -it --link my-mongo:mongo --rm mongo mongo --host mongo test'
	
	* use ***show dbs*** to see details about the database

### Use the Git Bash terminal and use the following command to create a database and insert a document
	
	```
		use dramas
		db.actors.insert({Name: "the Game of Thrones", Seasons: "7"})
       
    ```

### Once the database is created with a record, you can insert more documents
	```
	
        db.actors.insert([{Name: "Westworld", Seasons: "2"},
		{Name: "the Walking Dead", Seasons: "8"}
		])
    ```
	
### Use the following command to find specific documents
	```
		db.actors.find({$or:[{Name:"Westworld"}, {Name:"the Game of Thrones"}]})
       
    ```
	
### Use the following command to update a document
	```
		db.actors.update({Name:"the Walking Dead"},{ $set:{Seasons:"9"} })
       
    ```
	
### Use the following command to remove a single document
	```
		db.actors.remove({Name:"Westworld",Seasons:"2"}, { justOne:true } )
       
    ```