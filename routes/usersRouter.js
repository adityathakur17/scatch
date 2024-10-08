const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin")
const {
    registerUser,
    loginUser,
    logout
} = require("../controllers/authController")

router.get("/", function(req,res){
    res.send("hey its working");
});

router.post("/register", registerUser );

router.post("/login", loginUser)

router.post("/logout", logout);


module.exports = router 