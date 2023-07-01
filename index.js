const express=require("express")
const {sendemail} =require('./controller/sendEmail');
const dotenv=require('dotenv').config();
const cors=require('cors')
const bodyParser=require('body-parser');
const main = require("./dbConnection/dbConnection");
const cookieParser=require('cookie-parser');
const app=express();
main();
const PORT=process.env.PORT;
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));


//routerS
app.use("/contacts",require("./routes/contactRoutes"))
app.use("/auth",require("./routes/Authroute"))
app.use("/review",require("./routes/Reviewroute"))


app.post("/mail",sendemail)


app.listen(PORT,()=>{
    console.log(`server started ${PORT}`
   )
    }) 
    