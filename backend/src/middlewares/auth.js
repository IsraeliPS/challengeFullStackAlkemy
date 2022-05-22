const jwt = require('../lib/jwt')

function auth (req, res, next) {
    
  const { authorization: token } = req.headers
  try {
    const tokenDecode = jwt.verifyToken(token)
    const { userId, name } = tokenDecode
    req.user = { userId, name }
    next()
  } catch (error) {
    console.log('error', error)
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = auth