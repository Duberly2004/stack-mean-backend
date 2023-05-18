import { Router } from "express";
import { 
    getProducts,
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct
} from '../controllers/product.controller.js';
const router = Router();

router.get('/',getProducts);
router.post('/',createProduct);
router.get('/:_id',getProduct);
router.delete('/:_id',deleteProduct);
router.put('/:_id',updateProduct);

export default router;