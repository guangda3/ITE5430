import request from 'request-promise';
import MongoClient from 'mongodb';
import micro,{
  json,
  send,
  sendError
} from 'micro';

/*
Note:
This example assumes mongo running in a Docker container, from a standard docker mongo image.
docker run --name my-mongo -it -p 27017:27017 mongo:3.4.18-jessie

Use 'docker-machine env' to figure out the IP of your host network, and be sure to forward port 27017
*/

const DBName = 'school';
const url = `mongodb://192.168.99.100:27017/${DBName}`;

async function connector() {


  try {
    // Use connect method to connect to the Server
    return await await MongoClient.connect(url);
  } catch (err) {
    console.log(err.stack);
  }
}

async function findStudent(db, query){
  try{
    let r = await db.collection('students').find(query).toArray();
    console.log(r);
    return(r);
  } catch(err){
    return(err);
  }
}
async function updateStudentByName(db, query){
  const {firstName, lastName} = query;
  try{
    return await db.collection('students').update({firstName:firstName, lastName:lastName}, {$set: query}).toArray();
  } catch(err){
    return (err);
  }
}
async function insertStudent(db, query){
  console.log("inserting a student");
  try{
    return await db.collection('students').insert(query);
  } catch(err) {
    return(err)
  }
}
async function deleteStudentByName(db,query){
  const {firstName, lastName} = query;
  try{
    
    return await db.collection('students').remove({firstName:firstName, lastName:lastName});
  
  }catch(err){
    return(err);
  }
}

/**
 * Handler functions
 */
 
async function getHandler(request){
  const js = await json(request);
  console.log(js);
  const client = await connector();
  const db = client.db(DBName);
  return await findStudent(db, js);
}
async function postHandler (request){
  const js = await json(request)
  console.log(js);
  const client = await connector();
  const db = client.db(DBName);
  return await insertStudent(db, js);
}
async function putHandler(request){
  const js = await json(request);
  const client = await connector();
  const db = client.db(DBName);
  return await updateStudentByName(db, js);
}
async function deleteHandler(request){
  const js = await json(request);
  const client = await connector();
  const db = client.db(DBName);
  return await deleteStudentByName(db, js);
}

export default async(request, response)=>{
  try{
    switch(request.method){
      case 'GET':
        console.log("a get call was made");
        return await getHandler(request);
      case 'POST':
        console.log("a post call was made");
        return await postHandler(request);
      case 'PUT':
        console.log("a put call was made");
        return await putHandler(request);
      case 'DELETE':
        console.log("a delete call was made");
        return await deleteHandler(request);
      default:
        send(response, 405, 'Invalid');
        break;
    }
  } catch (error){
    throw error;
  }
}