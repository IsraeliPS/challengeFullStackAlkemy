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

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const operationData = await operation.IngressEgress(id)
    console.log(operationData)
    res.status(200).json({
      success: true,
      payload: operationData
    })
  } catch (err) {
    next(err)
    console.log(err)
  }
})

router.patch('/', async (req, res, next) => {
  try {
    const operationData = req.body
    await operation.update(operationData)
    res.status(200).json({
      success: true,
      message: 'Operation Updated successfully'
    })
  } catch (err) {
    next(err)
    console.log(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const { userId, operationId }= req.body
    
    await operation.deleteOp(userId, operationId)
    res.status(200).json({
      success: true,
      message: 'Operation Deleted successfully'
    })
  } catch (err) {
    next(err)
    console.log(err)
  }
})

module.exports = router
