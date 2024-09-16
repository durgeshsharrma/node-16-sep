const express = require('express');
const app = express();
const userrouter = require("./routes/user.js");




app.use(userrouter);









app.listen(8080 , (err) => {
    if(err){
        console.log(err);
    }
else{
    console.log("server has started on port 3000");
}
})