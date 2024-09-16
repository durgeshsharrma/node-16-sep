const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.js");

router.use(express.json());


router.get("/users" , (req , res) => {
    userController.getAllUsers(req,res);
})


router.get("/users/:id" , (req , res) => {
    userController.getUserById(req , res);
})







module.exports = router;