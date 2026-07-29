import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = mongoose.Schema({
    email:{type:String, required :true,unique:true},
    contact:{type:String, required :false},
    password:{type:String, func(){
        return !this.googleId;
    }},
    fullName:{type:String, required :true},
    role:{
        type:String,
        enum:["seller","buyer"],
        default:"buyer"
    },
    googleId:{
        type:String,
        required:false
    }
})

userSchema.pre("save",async function ()  {
    if(!this.isModified("password")) return;
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
})

userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password,this.password);
}

const userModel = mongoose.model("user",userSchema);

export default  userModel;