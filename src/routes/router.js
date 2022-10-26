const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getOneUser, updateOne, deleteOne } =
 require('../controllers/user');



// User route
router.post('/user', createUser);
router.get('/user',getAllUsers);
router.get('/user/:id', getOneUser);
router.get('/user/:id', updateOne);
router.get('/user/:id', deleteOne);



module.exports = router;