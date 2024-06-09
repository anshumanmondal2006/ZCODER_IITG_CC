const Message=require('../model/messageModel');
const Room =require('../model/roomModel');
const postmessage=async(req,res)=>{
    const {content,roomId}=req.body;
    try{
        const message=await Message.create({content,roomId});
        await Room.findByIdAndUpdate(roomId,{
            $push:{
                message:message._id
            }
        },{new:true});
        return res.status(200).json(message);
    }catch(err){
        return res.status(400).send(err);
    }
}
module.exports={postmessage};