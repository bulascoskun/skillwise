import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  singleItemCount: Number,
});

const OrderSchema = new mongoose.Schema(
  {
    items: [ItemSchema],
    totalValue: Number,
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
