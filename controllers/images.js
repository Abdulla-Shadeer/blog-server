//import Form from "formidable"

export function postImage(req,res){
    
    console.log(req.body.image)
    res.send("image received") 
}