const schemaUser = (sequelize, type) => {
  const User = sequelize.define('users', {
    userId: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: type.STRING(45),
      allowNull: false
    },
    email: {
      type: type.STRING(50),
      allowNull: false,
      require: true,
      isEmail: true
    },
    password: {
      type: type.STRING(80),
      allowNull: false,
      require: true
    }
  }, {
    timestamps: true
  })
  return User
}

module.exports = schemaUser
