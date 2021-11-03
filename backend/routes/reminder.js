const express = require('express')
const { addReminder } = require('../controller/reminderController')

const router =  express.Router()


router.post('/add', addReminder)

module.exports = router