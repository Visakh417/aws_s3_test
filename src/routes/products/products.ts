import {Router} from 'express';
import * as productController from './products_controller';

import multer from 'multer';
const upload = multer({ dest: 'uploads/' })

const router = Router();


router.post('/uploadProductImage',upload.single('image_file'), productController.uploadProductImage)


const product = module.exports = router;
export default product;