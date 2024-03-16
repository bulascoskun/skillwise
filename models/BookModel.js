import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
  {
    img: String,
    name: String,
    author: String,
    price: Number,
    stars: Number,
    sold: Number,
    category: {
      type: String,
      enum: ['highschool', 'kid', 'college'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Book', BookSchema);
