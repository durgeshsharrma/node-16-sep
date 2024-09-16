const express = require('express');
const app = express();
const userrouter = require("./routes/user.js");




app.use(userrouter);









app.listen(3000 , (err) => {
    if(err){
        console.log(err);
    }
else{
    console.log("server has started on port 3000");
}
})