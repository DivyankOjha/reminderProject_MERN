const mongoose = require('mongoose')

const reminderSchema = new mongoose.Schema({
    text:String,
    date:String,
    typeOf:String,
    createdAt:{type:String, default:Date.now}

})


const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;