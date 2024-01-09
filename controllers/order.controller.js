import { Order } from "../models/order.model.js";
 
export const fetchOrderByUser = async (req, res) => {
    const { id } = req.user;
    try {
      const orders = await Order.find({ user: id });
  
      res.status(200).json(cartItems);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  export const createOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
      const doc = await order.save();
      const result = await doc.populate('product');
      res.status(201).json(doc);
    } catch (err) {
      res.status(400).json("nhi ho rha contro");
    }
  };


export const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
    const order = await Order.findByIdAndDelete(id);
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};