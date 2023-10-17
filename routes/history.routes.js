const Router = require('express')
const router = new Router()
const historyService = require('../services/history.service.js')

router.get('/history/:id', historyService.getHistory)

module.exports = router