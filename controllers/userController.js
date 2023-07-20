const User = require("../models/UserModel")

module.exports = {
    getUsers: (req,res)=> {
        User.find().lean().then((users)=> {

            console.log(users);
            res.render("users/usersTab", {
                users:users
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
}