const express = require('express');
const router = express.Router();

//defined handlers
const {getProducts} = require('../controller/productController');

//routs
router.get('/getPrds',getProducts);


//export
exports.productRout = router;