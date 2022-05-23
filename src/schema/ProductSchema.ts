import mongoose, {Document, Schema } from 'mongoose';

export interface IProductSchema extends Document{
    image_url : string;
    product_type : string;
    createdOn : string;
}

const ProductSchema = new Schema({
    image_url : {
        type: String, 
        trim: true, 
    },

    product_type : {
        type:String,
        default:"GENERAL"
    },

    createdOn: {
        type: Number, 
        default: Date.now()
    },

});

const Product = mongoose.model<IProductSchema>('product', ProductSchema);
export default Product;