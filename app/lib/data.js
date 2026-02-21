import { connectToDb } from "./utils";

import { User } from "./models";

export const fetchUsers = async () => {
  try {
     await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
