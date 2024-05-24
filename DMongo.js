// mongoshell

// MongoDB and Mongoose
// MongoDB is an open-source, document database designed for ease of development and scaling. This database is also used to store data.
// Mongoose is a client API for node.js which makes it easy to access our database from our Express application.

// npm install --save mongoose

// Mongosh

Create Database - use Script  (script = db name)

 db.createCollection("users")  - create collection name users


db.users.insert({title:'blog 1',body:'content'}) - insert data to users collection


db.users.find()


 db.users.insertMany([{title:'blog 2',body:'content'},{title:'blog 2',body:'content'}])


db.users.find({title:'blog 1'})


db.users.find().sort({title:1})

db.users.find().sort({title:-1})  

// (1 is used for ascending order -1 use for descending order)

db.users.find({title:{$ne:'blog 1'}})


 db.users.find({title:'blog 1',body:'content'})

 db.users.find({$or :[{title:'blog 2'},{body:'content'}]})




 db.users.find().count()


db.users.find().limit(2)

 db.users.findOne()


// updateOne

db.users.updateOne(
    { title: 'blog 1' },
    { $set: { title: 'updated blog 1' } }
  );
  

// DeleteOne
db.users.deleteOne({ title: 'blog 1' });

// DeleteMany
db.users.deleteMany({ title: 'blog 2' });


// Delete collection
db.users.drop();


DeleteDataBase

db.dropDatabase();








