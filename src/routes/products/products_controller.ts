import express from 'express';
import { createNewProduct } from '../../db/product_db_function';




export async function uploadProductImage(req: express.Request, res: express.Response) {
    const image = req.body.url;
    
    try{
        const product = await createNewProduct(image);
        console.log(req.file);
    }catch(e){
        return res.send(e);
    }
    res.send("completed");
}