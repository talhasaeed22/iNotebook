const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const notesSchema = new Schema({
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
  });


  module.exports = mongoose.model('notes', notesSchema);