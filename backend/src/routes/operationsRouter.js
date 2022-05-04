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
    res.status(200).json({
      success: true,
      payload: operationData
    })
  } catch (err) {
    next(err)
    console.log(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const operationData = req.body
    await operation.update(id, operationData)
    res.status(200).json({
      success: true,
      message: 'Operation Updated successfully'
    })
  } catch (err) {
    next(err)
    console.log(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    await operation.deleteOp(id)
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
