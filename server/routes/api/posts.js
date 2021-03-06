const express = require('express');
const mongodb = require('mongodb');
let ObjectID = require("mongodb").ObjectID;

var  router = express.Router();
const posts = await loadPostsCollection();

router.get('/', async (req, res) => {
  res.send(await posts.find({status:'1'}, {sort: [['date', -1]]}).toArray());
  res.status(201).send();
});

router.get('/:id', async (req, res) => {
  var id = req.params.id;
  res.send(await posts.findOne({_id: ObjectID(id)}));
}); 
router.post('/', async (req, res) => {
  await posts.insertOne({
    body: req.body.body,
    date: new Date(),
    status: '1'
  });
  res.status(201).send();
});

  
  async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    YOUR_MONGO_DB_URL,
    {
      useNewUrlParser: true
    }
  
  );

  return client.db(DB_NAME).collection('posts');
}

module.exports = router;
