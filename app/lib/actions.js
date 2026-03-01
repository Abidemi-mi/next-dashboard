"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDb();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      isAdmin,
      isActive,
    });
    await newUser.save();
    console.log("saved to db");
  } catch (error) {
    console.log("Failed to add users!");
    throw new Error("Failed to add users!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//UPDATE USER
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDb();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key],
    );

    await User.findByIdAndUpdate(id, updateFields);
    console.log("User updated");
  } catch (error) {
    console.log("Failed to update use!");
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//ADD PRODUCT
export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    await connectToDb();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    console.log("Failed to save product!");
    throw new Error("Failed to save new product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};


//UPDATE PRODUCT
export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    await connectToDb();

    const updateProFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateProFields).forEach(
      (key) =>
        (updateProFields[key] === "" || undefined) && delete updateProFields[key],
    );

    await Product.findByIdAndUpdate(id, updateProFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

//DELETE PRODUCT
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();
    await Product.findByIdAndDelete(id).lean();
  } catch (error) {
    console.log("Failed to delete product!");
    throw new Error(error.message);
  }

  revalidatePath("/dashboard/products");
};

//DELETE USER
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();
    await User.findByIdAndDelete(id).lean();
  } catch (error) {
    console.log("Failed to delete user!");
    throw new Error("Failed to delete user!");
  }
  revalidatePath("/dashboard/products");
};
