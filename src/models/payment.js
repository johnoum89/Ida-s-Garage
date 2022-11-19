const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
      trim: true,
    },

    time: {
        type: Date,
        required:true,

    },
    Payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'payment'
    }
  
    


  },
  { timestamps: true }
)


paymentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

    //the password should not be revealed
    delete returnedObject.password
  }
})


const Payment  = mongoose.model('payment', paymentSchema)

module.exports = Payment






payment: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'payment'
  }
]