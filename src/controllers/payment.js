
const payment = require('../models/payment');
const user = require('../models/user');

 
const createPayment = async (req, res) => { const content = req.body;
 const user = await User.findById(content.userId);

 console.log('the user',user);

 try {
  const payment = await payment.create({user: content.userId,  ...content})

  console.log('checking what is here', division);

  user .payment =user .payment.concat(payment._id)
  await user.save();
  

  return res.status(201).json({ data: payment });
 } catch (error) {
  console.log(error);
  return res.status(500).end();
 }
};


const getAllPayment = async (req, res) => {
  const userId = req.body.userId;
    try {
     const payments = await Payment.find({user: userId});

     return res.status(201).json({ data: payment });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
   };
  
   const getOnePayment = async (req, res) => {
      const id = req.params.id
      const userId = req.body.userId;
      try {
        const payment = await Payment.findOne({ _id: id, user: userId});

        if (!payment) {
          return res.status(400).json({ message: 'payment not found' });
        }
        return res.status(201).json({ data: payment });
      } catch (error) {
        console.log(error);
        return res.status(500).end();
      }
    };
  
  
    
  const updateOnePayment = async (req, res) => {
      const id = req.params.id
      const userId = req.body.userId
      const content = req.body
      try {
        const payment = await Payment.findOneAndUpdate(
          { _id: id, user: userId},
          content,
          { new: true }
        );
        if (!payment) {
          return res.status(400).json({ message: 'payment not found' });
        }
        return res.status(201).json({ data: payment });
      } catch (error) {
        console.log(error);
        return res.status(500).end();
      }
    };
  
    const deleteOnePayment = async (req, res) => {
      const id = req.params.id
      const userId = req.body.userId;

      try {
        const payment = await payment.findOneAndRemove({ _id: id, user: userId });

        if (!payment) {
          return res.status(400).json({ message: 'payment not found' });
        }
        return res.status(201).json({ message: 'deleted successfully', 
    data: payment});
      } catch (error) {
        console.log(error);
        return res.status(500).end();
      }
    };
  
  
  module.exports = {
      createPayment,
      getAllPayment,
      getOnePayment,
      updateOnePayment,
      deleteOnePayment
  };
  
  

 
 
 
 
 