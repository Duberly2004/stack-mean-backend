import Product from '../models/Product.js';

export const createProduct = async(req,res)=>{
    const newProduct = new Product(req.body)
    await newProduct.save();
    res.json({"message":"Save Product successfully"})
}
export const getProducts =async (req,res)=>{
    const product = await Product.find()
    res.json(product)
}

export const getProduct = async (req,res)=>{
    const product = await Product.findById(req.params._id)
    console.log(req.params._id)
    res.json(product)
}

export const deleteProduct = async(req,res)=>{
    await Product.findByIdAndDelete(req.params._id)
    res.json({"Message":"Deleted Product Successfully"})
}

export const updateProduct = async (req,res)=>{
    await Product.findByIdAndUpdate(req.params._id,req.body)
    res.send({"Message":"Update Product Successfully"})
}

