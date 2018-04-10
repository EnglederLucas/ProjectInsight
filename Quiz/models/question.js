let mongoose = require('mongoose');

let questionSchema = mongoose.Schema({
  question:{
    type: String,
    required: true
  },
  a:{
    type: String,
    required: true
  },
  b:{
    type: String,
    required: true
  },
  c:{
    type: String,
    required: true
  },
  d:{
    type: String,
    required: true
  }
});

let Question = module.exports = mongoose.model('Question', questionSchema);
