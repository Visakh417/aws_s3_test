import Product from "../schema/ProductSchema";

export async function createNewProduct(url:string) {
    const product = await Product.create({ image_url: url });
    return product;
}