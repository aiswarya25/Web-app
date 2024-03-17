var Userdb = require('../model/model')

//create and save new user 
exports.create = (req, res)=>{
//validate request
if (!req.body) {
    res.status(400).send("Message content cannot be empty");
    return;
  }

  //new user 
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status:req.body.status
  })
  

  //save user in the db
  user 
  .save(user)
  .then(data=>{
    res.send(data)
  })
  .catch(err =>{
    res.status(500).send({
        message: err.message || "some error occurred while creating a create operation"
    })
  })
}

//retreuve and return all users 
exports.find = (req, res)=>{

}

//update new identified 

exports.update = (req, res)=>{

}

//delete user 
exports.delete = (req, res)=>{

}