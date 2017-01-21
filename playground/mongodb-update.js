//pulling out MongoClient using es6 object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5883a09f86273ba8811cc0bf')},{ $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// } ).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5883748ddc95e7088440b805')
}, {
  $set: {
    name: 'Araib Shafiq'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
}, (err) => {
  console.log('Unable to update: ',err);
});

  // db.close();
});
