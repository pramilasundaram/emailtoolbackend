const router = require('express').Router();
const {auth}=require('../middleware/authMiddleware')
//import contact controller
const {register,login,getuser}=require("../controller/authController")
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/profile").get(auth,getuser)



module.exports = router;