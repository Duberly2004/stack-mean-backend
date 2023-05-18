import { Router } from "express";
import  verifyToken from '../tokens/verifyToken.js'; 
import {
    singUp,
    singIn,
    dashboard,
    me,

} from '../controllers/auth.controller.js'
const router = Router();

router.post('/singup',singUp);
router.post('/signin',singIn);
router.get('/me',verifyToken, me);
router.get('/dashboard',verifyToken, dashboard);

export default router;