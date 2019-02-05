# ITE5430

## Week3 Assignment

### Instruction for installin the node.js

clone the remote repo to the local environment
	
use the git bash terminal
	
navigate to the repo and make **new branch** and new subfolder **week3**
	
navigate into the folder week3 and run the following command
	
	```
		npm init
       
    ```
	
enter the required fields; leave them blank if they're not applicable.
	
after entering 'yes' to the last question
	
run the following command
	
	```
		npm install mongodb --save
       
    ```
	
commit and push the new branch to the remote repo




## Week#4 assignment accomplishing steps:

### First, open up docker and run the mongoDB. remove it first if it's already exited
![DB_connection](https://github.com/guangda3/ITE5430/blob/week3/week3/snapshots/startMongoDB.PNG)

![DB_connection](https://github.com/guangda3/ITE5430/blob/week3/week3/snapshots/DB_connection.PNG)

### populate the mongoDB with the json formatted data. I use the sampledata.js file to fast populate the mongoDB
see the snapshot "populateDB.png" for more details
![populate database](https://github.com/guangda3/ITE5430/blob/week3/week3/snapshots/populateDB.PNG)

### update the package.json file with dependencies
![update json file](https://github.com/guangda3/ITE5430/blob/week3/week3/snapshots/update_packageJson.PNG)

### create a folder called "lib" and a file called "index.js" for running the npm commands
### run the "npm install" command in the terminal to install the dependencies. note if there is no lib folder, the installation will be failed. There should a folder called "dist" created and a index.js file inside it.

### add the "dist" at the end of the gitignore file to ignore the dist folder
![update gitignore file](https://github.com/guangda3/ITE5430/blob/week3/week3/snapshots/update_ignoreFile.PNG)

### create a file called "run.js" under week3 folder to connect to the micro-service

### run the following command to build the application and connect to the mongoDB
```
npm run build
```
![build application](https://github.com/guangda3/ITE5430/blob/week3/week3/snapshots/buildApplication.PNG)

```
npm start
```
![start the connection](https://github.com/guangda3/ITE5430/blob/week3/week3/snapshots/startConnection.PNG)
	

### start another terminal and run the following command to send the request and get response from mongoDB
```
 curl -X GET http://localhost:3000 -d '{"firstName":"John"}'
```
![getting response](https://github.com/guangda3/ITE5430/blob/week3/week3/snapshots/gettingData.PNG)

## To be continued
	
	