const { User } = require('../lib/db')
const { Operation } = require('../lib/db')

const create = async (dataOperation) => {
  const { concept, amount, typeOperation, dateOperation, userId } = dataOperation
  const operation = await Operation.create({ concept, amount, dateOperation, typeOperation, userId })
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

const update = async (idUser, idOperation, dataOperation) => {
  const { concept, amount, dateOperation, typeOperation, userId } = dataOperation
  const operation = await Operation.update(
    { concept, amount, dateOperation, typeOperation, userId },
    {
      where: { idOperation },
      include: [{
        model: User,
        where: { idUser }
      }]
    })
  return operation
}

const deleteOp = async (idUser, idOperation) => {
  return await Operation.destroy({
    where: { idOperation },
    include: [{
      model: User,
      where: { idUser }
    }]

  })
}

module.exports = {
  create,
  IngressEgress,
  update,
  deleteOp
}
