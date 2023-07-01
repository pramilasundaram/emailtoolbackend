const mongoose=require('mongoose')

async function main() { 
try {
    const connect=await mongoose.connect('mongodb+srv://pramila:r6CAKNYccE7rTTNZ@cluster0.mcsqc3k.mongodb.net/webcode?retryWrites=true&w=majority');
console.log('db connected:',connect.connection.host,connect.connection.name);  
} catch (error) {
     console.log(error);  
}
}
module.exports= main;