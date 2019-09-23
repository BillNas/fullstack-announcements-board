const express = require('express');
const mongodb = require('mongodb');
let ObjectID = require("mongodb").ObjectID;

var  router = express.Router();

router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({status:'1'}, {sort: [['date', -1]]}).toArray());
  res.status(201).send();
});

router.get('/:id', async (req, res) => {
  var id = req.params.id;
  const posts = await loadPostsCollection();
  res.send(await posts.findOne({_id: ObjectID(id)}));
}); 
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    body: req.body.body,
    date: new Date(),
    status: '0'
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

  return client.db('teiste').collection('posts');
}

module.exports = router;
