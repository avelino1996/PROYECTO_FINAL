const express = require("express");
const router = express.Router();


const User = require("../models/user");

router.post ("/", (req, res) => { 
    res.clearCookie('t')
    res.json({message: "Signout success"});
  }); 


module.exports = router;