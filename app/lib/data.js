import { connectToDb } from "./utils";
import { Product, User } from "./models";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    await connectToDb();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1)).lean();
    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    await connectToDb();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1)).lean();
    const count = await Product.find({ title: { $regex: regex } }).countDocuments();
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
};

