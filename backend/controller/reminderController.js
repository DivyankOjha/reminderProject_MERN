const Reminder = require("../models/reminderModel")
const mongoose = require("mongoose")

exports.addReminder = async (req, res, next) => {
  console.log('adding reminder...',req.body)
    let data = {
        text:req.body.text,
        date:req.body.date,
        typeOf:req.body.type
    }
  const addRem = await  Reminder.create(data);

  res.status(200).json({
    status: 'success',
    data: addRem
  })
}
