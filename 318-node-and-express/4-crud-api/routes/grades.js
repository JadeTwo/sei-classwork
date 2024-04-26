import express from 'express'

import db from '../db/conn.js'

import { ObjectId } from 'mongodb'

const router = express.Router()

// Get a single grade data
router.get('/:id', async (req, res) => {
    let collection = await db.collection("grades")
    let query = { _id: new ObjectId(req.params.id) }

    let result = await collection.findOne(query)

    if (!result) res.send('Not found').status(404)
    else res.send(result).status(200)
})

router.get("/student/:id", async (req, res) => {
    res.redirect(`learner/${req.params.id}`);
});

// Get grade data for a single student
router.get('/learner/:id', async (req, res) => {
    let collection = await db.collection("grades")
    let query = { learner_id: Number(req.params.id) }
    let result = await collection.find(query).toArray()

    if (!result) {
        res.send('Not found').status(404)
    }
    else {
        res.send(result).status(200)
    }
})

// Get grade data for a specific class
router.get('/class/:id', async (req, res) => {
    let collection = await db.collection("grades")
    let query = { class_id: Number(req.params.id) }
    let result = await collection.find(query).toArray()

    if (!result) {
        res.send('Not found').status(404)
    }
    else {
        res.send(result).status(200)
    }
})

//    /grades
router.post('/', async (req, res) => {
    let collection = await db.collection("grades")
    let newDocument = req.body

    if (newDocument.student_id) {
        newDocument.learner_id = newDocument.student_id
        delete newDocument.student_id
    }

    let result = await collection.insertOne(newDocument)
    res.send(result).status(204)
})


router.patch("/:id/add", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { _id: new ObjectId(req.params.id) };
  
    let result = await collection.updateOne(query, {
      $push: { scores: req.body },
    });
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.patch("/:id/remove", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { _id: new ObjectId(req.params.id) };
  
    let result = await collection.updateOne(query, {
      $pull: { scores: req.body },
    });
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


router.delete("/:id", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.deleteOne(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});




// Get a class's grade data
router.get("/class/:id", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { class_id: Number(req.params.id) };
  
    // Check for learner_id parameter
    if (req.query.learner) query.learner_id = Number(req.query.learner);
  
    let result = await collection.find(query).toArray();
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});
  
  // Update a class id
  router.patch("/class/:id", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { class_id: Number(req.params.id) };
  
    let result = await collection.updateMany(query, {
      $set: { class_id: req.body.class_id },
    });
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });
  
  // Delete a class
  router.delete("/class/:id", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { class_id: Number(req.params.id) };
  
    let result = await collection.deleteMany(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

//

export default router