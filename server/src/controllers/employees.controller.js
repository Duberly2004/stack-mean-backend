import Employee from '../models/Employee.js';

export const createEmployee = async(req,res)=>{
    const newEmployee = new Employee(req.body)
    await newEmployee.save();
    res.json({"message":"Save Employee successfully"})
}
export const getEmployees =async (req,res)=>{
    const employee = await Employee.find()
    res.json(employee)
}

export const getEmployee = async (req,res)=>{
    const employee = await Employee.findById(req.params._id)
    console.log(req.params._id)
    res.json(employee)
}

export const deleteEmployee = async(req,res)=>{
    await Employee.findByIdAndDelete(req.params._id)
    res.json({"Message":"Deleted Employee Successfully"})
}

export const updateEmployee = async (req,res)=>{
    await Employee.findByIdAndUpdate(req.params._id,req.body)
    res.send({"Message":"Update Employee Successfully"})
}

