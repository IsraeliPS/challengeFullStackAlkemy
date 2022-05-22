const express = require('express')
const auth = require('../middlewares/auth')
const operation = require('../usecases/operations')

const router = express.Router()

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

router.post('/', auth, async (req, res, next) => {
  try {
    const {userId}=req.user
    const operationData = req.body
    
    if (userId===operationData.userId ) {
      const operationCreated = await operation.create(operationData)
        
      res.status(201).json({
        success: true,
        message: 'Operation Created successfully',
        payload: operationCreated
      })
    } else {
      res.status(401).json({
        success: false,
        message: 'Unauthorized'
      })
    }
  } catch (err) {
    next(err)
    console.log(err)
  }
})

router.patch('/', auth, async (req, res, next) => {
  try {
    const {userId}=req.user
    const operationData = req.body

    if (userId===operationData.userId) {
      await operation.update(operationData)
      res.status(200).json({
        success: true,
        message: 'Operation Updated successfully'
      })
    } else {
      res.status(401).json({
        success: false,
        message: 'Unauthorized'
      })
    }

  } catch (err) {
    next(err)
    console.log(err)
  }
})

router.delete('/', auth, async (req, res, next) => {
  try {
    const {userId}=req.user
    const data= req.body
    
    await operation.deleteOp(data)
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
