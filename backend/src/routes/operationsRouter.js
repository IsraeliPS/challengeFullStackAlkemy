const express = require('express')
const operation = require('../usecases/operations')

const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const operationData = req.body
    const operationCreated = await operation.create(operationData)
    const operations = operationCreated
    res.status(201).json({
      success: true,
      message: 'Operation Created successfully',
      payload: operations
    })
  } catch (err) {
    next(err)
    console.log(err)
  }
})

module.exports = router
