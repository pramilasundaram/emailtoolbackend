const Contact=require('../models/contactmodel')
const Auth=require('../models/Authmodel')
//get all contacts
//GET  /api/contacts

const getContacts=async(req, res) => {
const contact=await Contact.find({user:req.user.id})
    res.status(200).json(contact)
}

//get all contacts
//POST  /api/contacts
const createContact=async(req, res) => {
    
   const doc=await Contact.create({
    fullname:req.body.username,
    email:req.body.email,
    phonenumber:req.body.phonenumber,
    user:req.user.id
   });
   console.log(doc)
    res.json(doc)
}

//update a contacts
//PUT  /api/contacts/:id
const updateContact=async(req, res) => {
  const contact=await Contact.findById(req.params.id);
    if(!contact){
      res.status(400);
      throw new Error("contact not found")
    }
    const user=await Auth.findById(req.user.id);
    if(!user){
      return res.status(401).json({message:"user not found"})
    }
    if(contact.user.toString()!==user.id){
      return res.status(401).json({msg:"user not authorized"})
    }
  let updatecontact=await new Contact({
        _id:req.params.id,
       username:req.body.username,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        user:req.user.id
    });
    Contact.updateOne({_id: req.params.id}, updatecontact).then(
        () => {
          res.status(201).json({
            message: 'contact updated successfully!'
          });
        }
      )

}


//delete all contacts
//DELETE /api/contacts/:id
const deleteContact=async(req, res) => {
    const contact=await Contact.deleteOne({_id:req.params.id})
    if(!contact){
res.status(404);
throw new Error("Contact not found")
    }   
    res.status(200).json({ message: `delete a contact at id: ${req.params.id}`,data:contact })
}
module.exports={getContacts,createContact,deleteContact,updateContact}