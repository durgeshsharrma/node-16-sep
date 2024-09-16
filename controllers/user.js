const users = require('../data.json');

module.exports.getAllUsers = (req , res) => {
   try {res.send(users);}
   catch(err){
    console.log(err);
   }
}


module.exports.getUserById = (req , res) => {
    try{let id = parseInt(req.params.id);
    let findedUser = users.find((user) => id == user.id)
    res.send(findedUser);}
    catch(err){
        console.log(err);
    }
}