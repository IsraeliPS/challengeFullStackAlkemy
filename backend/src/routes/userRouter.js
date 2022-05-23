const express = require('express')
const user = require('../usecases/user')


const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const userData = req.body
    const userCreated = await user.create(userData)
    const { userId, name } = userCreated
    res.status(201).json({
      success: true,
      message: 'User Created successfully',
      payload: { userId, name }
    })
     
    
  } catch (err) {
    next(err)
    console.log(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const usersData = await user.get()
    res.status(200).json({
      success: true,
      payload: usersData
    })
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    
    const userData = await user.getByUserId(id)
    
    res.status(200).json({
      success: true,
      payload: userData
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
