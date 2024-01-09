 import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: { type: [mongoose.Schema.Types.Mixed], required: true },
    totalAmount: { type: Number },
    totalItems: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    paymentMethod: { type: String, required: true, enum: ['card', 'cash']},
    paymentStatus: { type: String, default: 'pending' },
    status: { type: String, default: 'pending' },
    selectedAddress: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

const virtual = orderSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
orderSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const Order = mongoose.model('Order', orderSchema);