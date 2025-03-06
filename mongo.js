const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/AV_UserDetails")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})


const LogInSchema = new mongoose.Schema({
    Username: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true }
});

const LogInCollection = mongoose.model('LogIn', LogInSchema);

module.exports = LogInCollection;
