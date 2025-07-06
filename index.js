const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DB-mongo')
.then(()=>{
    console.log("DB-mongo connected")
}).catch((err)=>{
    console.log(err)
})

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minLength:[8,"Password should be at least 8 characters"],
        maxLength:[20,"Password should be at maximum 20 characters"]
    },
    age:{
        type:Number,
        min:10,
        max:100
    },
    role:{
        type:String,
        enum:["admin","manager","customer"]
    }
},{timestamps:true})

const UserModel = mongoose.model("users",UserSchema);

let user ={
    name:"Vinura",
    password:"dfghjkl56789",
    age:28,
    role:"admin"
}
UserModel.create(user)
.then((data)=>{
    console.log(data)
    console.log("User Model Created")
})
.catch((err)=>{
    console.log(err)
})

const EmployeeSchema=mongoose.Schema({
    name:String,
    age:Number
},{timestamps:true})
const EmployeeModel=mongoose.model("employee",EmployeeSchema);
let employees={
    name:"Suddah",
    age:23
}
EmployeeModel.create(employees)
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

// mongoose.connect
// mongoose.Schema
// mongoose.model
// modelNames.create

UserModel.find({name:"Vinura"}).sort({age:1})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

UserModel.deleteOne({age:28})
.then((info)=>{
    console.log(info)
})

UserModel.updateOne({name:"Vinura"},{age:22})
 .then((data)=>{
     console.log(data)
 })
 .catch((err)=>{
    console.log(err)
})