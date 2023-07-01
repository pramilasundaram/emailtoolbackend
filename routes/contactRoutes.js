const router = require('express').Router();
const {auth}=require('../middleware/authMiddleware')
//import contact controller
const {getContacts,updateContact,createContact,deleteContact}=require("../controller/contactController")


router.route("/").get(auth,getContacts).post(auth,createContact)

router.route("/:id").put(auth,updateContact).delete(auth,deleteContact)

module.exports = router;