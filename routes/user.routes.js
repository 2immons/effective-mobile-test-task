const Router = require('express')
const router = new Router()
const userService = require('../services/user.service.js')

router.post('/user', userService.createUser)
router.get('/users', userService.getUsers)
router.put('/user', userService.updateUser)

module.exports = router