const { Operation } = require('../lib/db')
// const { encrypt } = require('../lib/crypt')
// const { jwt } = require('../lib/jwt')

const create = async (dataOperation) => {
  const dateOperation = new Date()
  const { concept, amount, typeOperation, userId } = dataOperation
  const operation = await Operation.create({ concept, amount, dateOperation, typeOperation, userId })
  return operation
}

module.exports = {
  create
}
