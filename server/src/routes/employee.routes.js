import { Router } from "express";
import { 
    getEmployees,
    createEmployee,
    getEmployee,
    deleteEmployee,
    updateEmployee
} from '../controllers/employees.controller.js';
const router = Router();

router.get('/',getEmployees);
router.post('/',createEmployee);
router.get('/:_id',getEmployee);
router.delete('/:_id',deleteEmployee);
router.put('/:_id',updateEmployee);

export default router;