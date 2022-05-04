const express = require('express')
const user = require('../usecases/user')
// const jwt = require('../lib/jwt')
// const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const userData = req.body
    console.log('userdata:', userData)
    const userCreated = await user.create(userData)
    console.log('userCreated:', userCreated)
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

// A partir de este punto se necesita token

// router.get('/:id', async (req, res, next) => {
//   const { id } = req.params

//   const userObject = await user.getById(id)
//   try {
//     res.json({

//       id: userObject.id,
//       userName: userObject.name
//     })
//   } catch (err) {
//     next(err)
//     console.log(err)
//   }
// })

// // Usamos userhHandler para que solo el usuario puede modificar su propio registro
// router.patch('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params
//     const userData = req.body

//     console.log(userData)
//     const userUpdate = await user.update(id, userData)
//     res.status(200).json({
//       status: true,
//       message: 'Update succesfull',
//       payload: {
//         userId: userUpdate._id,
//         name: userUpdate.name,
//         username: userUpdate.username
//       }
//     })
//   } catch (err) {
//     next(err)
//     console.log(err)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//   } catch (err) {
//     next(err)
//     console.log(err)
//   }
// })

module.exports = router
