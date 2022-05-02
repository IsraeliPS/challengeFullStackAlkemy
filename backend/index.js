const { app, port } = require('./src/server')

// db.connect()
//   .then(() => {
//     console.log('DB connected')
//   })
//   .catch((err) => {
//     console.error('Connection refused', err)
//   })

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`)
})
