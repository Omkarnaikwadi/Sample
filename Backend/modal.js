const mongoose=require('mongoose');

const sSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
      },
    email:{
        type: String,
        required: true
      },
    password:{
        type: String,
        required: true
      }
})
// const pSchema=mongoose.Schema({

// })
module.exports=mongoose.model("/Login",sSchema);


