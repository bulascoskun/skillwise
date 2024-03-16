import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    course_id: {
      type: mongoose.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
  },
  { timestamps: true }
);

SubscriptionSchema.index({ user_id: 1, course_id: 1 }, { unique: true });

export default mongoose.model('Subscription', SubscriptionSchema);
