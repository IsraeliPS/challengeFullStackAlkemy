const { User } = require('../lib/db')
const { Operation } = require('../lib/db')

const encrypt = require('../lib/crypt')
// const jwt = require('../lib/jwt')

const create = async (dataUser) => {
  const { name, email, password } = dataUser
  const hash = await encrypt.hashPassword(password)
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

// const authenticate = async (user, password) => {
//   const hash = user.password
//   return await encrypt.verifyPassword(password, hash)
// }

// // Proceso LogIn de usuarios
// const logIn = async (username, password) => {
//   const userObject = await getByUser({ username })
//   console.log('userOBject:', userObject)
//   const hash = userObject.password
//   const isValid = await encrypt.verifyPassword(password, hash)

//   if (isValid) {
//     const payload = {
//       sub: userObject._id,
//       role: userObject.role
//     }
//     console.log(payload)
//     const token = await jwt.sign(payload)
//     return token
//   } else {
//     error()
//   }
// }
module.exports = {
  create,
  get,
  getByUserId
}
