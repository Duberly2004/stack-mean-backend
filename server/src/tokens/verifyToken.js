import Jwt from 'jsonwebtoken';
import {secret} from '../config.js';

const verifyToken=(req, res, next)=>{
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({
            auth: false,
            message: 'No token provided'
        });
    }

    const decoded = Jwt.verify(token, secret);

    req.userId = decoded.id;
    next();

}

export default verifyToken;