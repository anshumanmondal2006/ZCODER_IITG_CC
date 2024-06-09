const mongoose = require('mongoose');
const messageSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    roomId:{
        type:String,
        ref:'room'
    }
})
const Message=mongoose.model('message',messageSchema);
module.exports= Message;