import { Schema,model } from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new Schema({
    username: {type:String,require:true},
    email: {type:String,require:true},
    password: {type:String,require:true}
},{
    timestamps:true,
    versionKey:false
});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt)
};


userSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
}

export default model('User', userSchema);