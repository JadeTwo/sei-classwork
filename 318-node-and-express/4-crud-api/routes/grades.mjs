import express from 'express'

import db from '../db/conn.mjs'

import { ObjectId } from 'mongodb'

const router = express.Router()

//    /grades

router.get('/:id', async (req, res) => {
    let collection = await db.collection("grades")
    let query = { _id: new ObjectId(req.params.id) }

    // db.grades.find({ _id: req.params.id })

    let result = await collection.findOne(query)

    res.send(result).status(200)
})

//

export default router