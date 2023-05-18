import {secret} from '../config.js';
import User from "../models/User.js";
import Jwt  from 'jsonwebtoken';

export const singUp = async(req,res,next)=>{
    const { username, email, password } = req.body;
    const user = new User(
       {
          username,
          email,
          password
       } 
       );
    user.password = await user.encryptPassword(user.password)
    await user.save();

    const token = Jwt.sign({id: user._id}, secret, {
        expiresIn: 60 * 60 * 24
    })
    res.json({auth: true, token})
}


export const me = async (req, res, next) => {
    const user = await User.findById(req.userId, { password: 0 });
    if(!user){
        return res.status(404).send('No user found....!!!');
    }

    res.json(user);
}

export const singIn = async (req, res, next) => {
    const { email, password } = req.body; 
    //console.log(email, password);
    const user = await User.findOne({email: email})

    if(!user){
        return res.status(404).send("The user doesn't exists");
    }

    const validPassword = await user.validatePassword(password);
    
    if(!validPassword){
        return res.status(401).json({auth: false, token: null});
    }

    const token = Jwt.sign({id: user._id}, secret, {
        expiresIn: 60 * 60 * 24
    });
    
    res.json({auth: true, token});
}

export const dashboard = async (req, res) => {
    res.json({message:"dashboard"})
}