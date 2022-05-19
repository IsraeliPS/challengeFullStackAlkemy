const { User } = require('../lib/db')
const { Operation } = require('../lib/db')
const jwt = require('../lib/jwt')
const bcrypt = require('bcrypt')

const {hashPassword, verifyPassword} = require('../lib/crypt')

const create = async (dataUser) => {
  const { name, email, password } = dataUser
  const hash = await hashPassword(password)
  const user = await User.create({ name, email, password: hash })

  return user
}

const get = async () => {
  return await User.findAll()
}

const getByUserId = async (id) => {
  return await User.findAll({
    where: { userId: id },
    include: [{
      model: Operation,
      where: { userId: id }
    }]
  })
}

const getByEmail = async (email) => {
  return await User.findOne({
    where: { email: email }
  })
}

const logIn = async (email, password) => {
  
  const userObject = await getByEmail( email )
  const hash=userObject.dataValues.password
  
  const isValid = await verifyPassword(password, hash)
  console.log(userObject.dataValues)

  if (isValid) {
    const payload = {
      email:userObject.dataValues.email
    }
    const token = await jwt.sign(payload)
    return token
  } else {
    return 'user not found'
  }
}
module.exports = {
  create,
  get,
  getByUserId,
  logIn
}
