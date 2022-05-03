const schemaOperations = (sequelize, type) => {
  const User = sequelize.define('operations', {
    operationId: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    concept: {
      type: type.STRING(30),
      allowNull: false
    },
    amount: {
      type: type.DECIMAL(10, 2),
      allowNull: false
    },
    dateOperation: {
      type: type.DATEONLY,
      allowNull: false
    },
    typeOperation: {
      type: type.STRING(7),
      allowNull: false
    },
    userId: {
      type: type.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userId'

      }
    }
  }, {
    timestamps: true
  })
  return User
}

module.exports = schemaOperations
