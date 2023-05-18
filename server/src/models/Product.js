import { Schema,model } from 'mongoose';

const productSchema = new Schema({
    name:{type:String,require:true},
    price:{type:Number,require:true},
    brand:{type:String,require:true},
    qualiti:{type:String,require:true}
},{
    timestamps:true,
    versionKey:false

})

export default model('Product', productSchema)