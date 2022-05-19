const { User } = require('../lib/db')
const { Operation } = require('../lib/db')

const create = async (dataOperation) => {
  console.log(dataOperation)
  const { concept, amount, typeOperation, date, userId } = dataOperation
  const operation = await Operation.create({ concept, amount, dateOperation:date, typeOperation, userId })
  return operation
}

const IngressEgress = async (id) => {
  const dataOperations = await Operation.findAll({ where: { userId: id } })
  const ingress = dataOperations.filter(operation => operation.typeOperation === 'ingress')
  const valueIngress = ingress.reduce((total, operation) => total + parseFloat(operation.amount), 0)

  const egress = dataOperations.filter(operation => operation.typeOperation === 'egress')
  const valueEgress = egress.reduce((total, operation) => total + parseFloat(operation.amount), 0)

  return { ingress, valueIngress, egress, valueEgress }
}

const update = async (dataOperation) => {
  const { concept, amount, dateOperation, typeOperation, userId, operationId } = dataOperation
  const operation = await Operation.update(
    { concept, amount, dateOperation, typeOperation, userId },
    {
      where: { operationId },
      include: [{
        model: User,
        where: { userId }
      }]
    })
  return operation
}

const deleteOp = async (userId, operationId) => {
  return await Operation.destroy({
    where: { operationId },
    include: [{
      model: User,
      where: { userId }
    }]
  })
}

module.exports = {
  create,
  IngressEgress,
  update,
  deleteOp
}
