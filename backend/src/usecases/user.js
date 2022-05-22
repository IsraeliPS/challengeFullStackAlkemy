const { User } = require('../lib/db')
const { Operation } = require('../lib/db')
const jwt = require('../lib/jwt')


const {hashPassword, verifyPassword} = require('../lib/crypt')

const create = async (dataUser) => {
  const { name, email, password } = dataUser
  const hash = await hashPassword(password)
  const user = await User.create({ name, email, password: hash })

  return user
}

const get = async () => {
  return await User.findAll({
    limit: 10
  })
}

const getByUserId = async (id) => {
  return await User.findAll({
    where: { userId: id },
    include: [{
      model: Operation,
      where: { userId: id },
      order: [['createdAt', 'DESC']],
      limit:10
    }],
    
  })
}

const getByEmail = async (email) => {
  return await User.findOne({
    where: { email: email }
  })
}

const logIn = async (email, password) => {
  try{
    const user = await getByEmail(email)

    if(!user){
      throw new Error('User not found')
    }
    const isValid = await verifyPassword(password, user.password)
    if(!isValid){
      throw new Error('Password invalid')
    }
    
    const token = await jwt.sign({ userId: user.dataValues.userId ,name : user.dataValues.name})
    
    return {
      userId:user.dataValues.userId,
      name:user.dataValues.name,
      token
    }
  }catch(error){
    throw error
  }  
}


module.exports = {
  create,
  get,
  getByUserId,
  logIn
}
