const express = require('express');
const router = express.Router();

 const { createUser, getAllUsers, getOneUser, updateOne, deleteOne } = require('../controllers/user');

 const { createPayment,getAllPayment,getOnePayment,updateOnePayment,deleteOnePayment} = require('../controllers/payment');



// User route
router.post('/user', createUser);
router.get('/user',getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne)

//payment route
router.post('/payment', createPayment);
router.get('/payment',getAllPayment);
router.get('/payment/:id', getOnePayment);
router.put('/payment/:id', updateOnePayment);
router.delete('/payment/:', deleteOnePayment)



module.exports = router;