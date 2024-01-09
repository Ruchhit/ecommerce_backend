 import { Cart } from "../models/cart.model.js";
 

export const fetchCartByUser = async (req, res) => {
  const { id } = req.user;
  try {
    const cartItems = await Cart.find({ user: id }).populate('product');

    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const addToCart = async (req, res) => {
  // const {id} = req.user;
  // const cart = new Cart({...req.body,user:id});
  const cart = new Cart(req.body);
  try {
    const doc = await cart.save();
    const result = await doc.populate('product');
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json("nhi ho rha contro");
  }
};

export const deleteFromCart = async (req, res) => {
    const { id } = req.params;
    try {
    const doc = await Cart.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const result = await cart.populate('product');

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};