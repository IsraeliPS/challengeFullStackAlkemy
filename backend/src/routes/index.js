
const userRouter = require('./userRouter')
const operationRouter = require('./operationsRouter')
// const authRouter = require('./authRouter')

const apiRouter = (app) => {
  app.use('/user', userRouter)
  app.use('/operation', operationRouter)
  // app.use('/auth', authRouter)
}

module.exports = apiRouter
