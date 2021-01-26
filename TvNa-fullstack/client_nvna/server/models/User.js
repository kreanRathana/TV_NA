const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  files: {
    type: Array
  },
  place_name:{
    type:String,
    trim:true
  },
  address:{
    type:String,
    trim:true
  },
  header:{
    type:String,
    trim:true
  },
  description:{
    type:String
  }
}, {
  collection: 'Places'
})

module.exports = mongoose.model('User', userSchema)