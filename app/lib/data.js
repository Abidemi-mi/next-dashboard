import { connectToDb } from "./utils";
import { Product, User } from "./models";

//FETCH USERS
export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    await connectToDb();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .lean();
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

//FETCH USER
export const fetchUser = async (id) => {
  try {
    await connectToDb();
    const user = await User.findById(id).lean();
    return user;
  } catch (error) {
    console.log("Failed to fetch user!");
    throw new Error("Failed to fetch user!");
  }
};

//FETCH PRODUCTS
export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    await connectToDb();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .lean();
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
};

//FETCH PRODUCT
export const fetchProduct = async (id) => {
 try {
    await connectToDb();
    const product = await Product.findById(id).lean();
    return product;
  } catch (error) {
    console.log("Failed to fetch product!");
    throw new Error("Failed to fetch product!");
  }
};
