 
var Userdb = require('../model/model');
//create and save new user 
exports.create=(req,res)=>{
    //validate req
    if(!req.body){
        res.status(400).send({message : "Content can not be empty!"});
        return;
    }
    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender
    })

    res.send(user)
    user.save(user)

    //save user in db
//     user
//         .save(user)
//         .then(data=>{
//             res.send(data)
//             console.log(data)
//             console.log("Data sent")
            
//         })
//         .catch(err=>{
//             res.status(500).send({messgae: err.messgae||"Some error occured"})
//         });

}

//retrieve and retuen
exports.find=(req,res)=>{
    // res.send('hello')
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message : err.message || "Some error "})
    })

}

//update 
exports.update=(req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message : "Data to update cannot be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Cannot update user"})
        }else{
           res.send(data) 
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update"})
    })

}

//delete
exports.delete=(req,res)=>{
    const id= eq.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Data to delete cannot be empty"})
        }else{
            res.send({
                message:"User was deleted!"
            })
        }
    })
    .catch(er=>{
        res.status(500).send({
            message:"Could not delete"
        })
    })

}


