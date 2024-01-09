 import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: Buffer, required: true },
  role: { type: String, required: true, default:'user' },
  addresses: { type: [mongoose.Schema.Types.Mixed] }, 
  name: { type: String },
  salt: Buffer,
  resetPasswordToken: {type: String, default:''}
},{timestamps: true});

const virtual = userSchema.virtual('id');

virtual.get(function () {
  return this._id;
});
userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const User = mongoose.model('User', userSchema);