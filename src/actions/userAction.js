"use server"
import { revalidatePath } from "next/cache";
import connectToDataBase from "../db/connection";
import User from "../models/User";
import { generateCustomId } from "../utils/generateCustomId";


export async function CREATEUSER(data) {
  try {
    await connectToDataBase();

    const existingMobileNumer = await User.findOne({
      mobile_number: data.mobile_number,
    });
    if (existingMobileNumer) {
      return { success: false, error: "This mobile number already exists" };
    }
    const existingEmail = await User.findOne({
      email: data.email,
    });
    if (existingEmail) {
      return { success: false, error: "This Email already exists" };
    }
    if (!data.user_id) {
      data.user_id = await generateCustomId(User, "user_id", "userId");
    }

    const newUser = new User(data);

    const savedUser = await newUser.save();

    revalidatePath("/reboots/user-management");
    return { success: true, user: JSON.parse(JSON.stringify(savedUser)) };
  } catch (error) {
    console.error("Error creating User:", error);
    return { success: false, error: error.message || "Unknown error" };
  }
}


// export async function GETALLUSERS({
//   page = 1,
//   limit = 20,
//   search,
//   role,
//   status,
// }) {
//   try {
//     await connectToDataBase();

//     const query = {};

//     if (search) {
//       query.name = { $regex: search, $options: "i" };
//       query.mobile_number = { $regex: search, $options: "i" };
//     }

//     if (role) {
//       query.role = role;
//     }
//     if (typeof status === "boolean") {
//       query.status = status;
//     }

//     const users = await User.find(query)
//       .skip((page - 1) * limit)
//       .limit(limit)
//       .sort({ createdAt: -1 });

//     const totalUsers = await User.countDocuments(query);

//     return {
//       success: true,
//       data: JSON.parse(JSON.stringify(users)),
//       paginations: {
//         totalPages: Math.ceil(totalUsers / limit),
//         currentPage: page,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       success: false,
//       error: error.message || "Unknown error",
//       data: [],
//       paginations: { totalPages: 0, currentPage: 1 },
//     };
//   }
// }

// export async function UPDATEUSER(userId, data) {
//   try {
//     await connectToDataBase();

//     const existingUser = await User.findOne({
//       $or: [
//         { user_id: userId },
//         {
//           _id: mongoose.Types.ObjectId.isValid(userId)
//             ? new mongoose.Types.ObjectId(userId)
//             : undefined,
//         },
//       ],
//     });

//     if (!existingUser) {
//       return { success: false, error: "User not found" };
//     }

//     if (
//       data.mobile_number &&
//       data.mobile_number !== existingUser.mobile_number
//     ) {
//       const mobileExists = await User.findOne({
//         mobile_number: data.mobile_number,
//         _id: { $ne: existingUser._id },
//       });
//       if (mobileExists) {
//         return { success: false, error: "This mobile number already exists" };
//       }
//     }

//     if (data.email && data.email !== existingUser.email) {
//       const emailExists = await User.findOne({
//         email: data.email,
//         _id: { $ne: existingUser._id },
//       });
//       if (emailExists) {
//         return { success: false, error: "This Email already exists" };
//       }
//     }

//     Object.keys(data).forEach((key) => {
//       (existingUser)[key] = data[key];
//     });

//     const updatedUser = await existingUser.save();

//     revalidatePath("/reboots/user-managment");
//     return { success: true, user: JSON.parse(JSON.stringify(updatedUser)) };
//   } catch (error) {
//     console.error("Error updating User:", error);
//     return { success: false, error: error.message || "Unknown error" };
//   }
// }

// export async function DELETEUSER(userId) {
//   try {
//     await connectToDataBase();

//     const deletedUser = await User.findOneAndDelete({
//       $or: [
//         { user_id: userId },
//         {
//           _id: mongoose.Types.ObjectId.isValid(userId)
//             ? new mongoose.Types.ObjectId(userId)
//             : undefined,
//         },
//       ],
//     });

//     if (!deletedUser) {
//       return { success: false, error: "User not found" };
//     }

//     revalidatePath("/reboots/user-managment");

//     return { success: true };
//   } catch (error) {
//     console.error("Error deleting User:", error);
//     return { success: false, error: error.message || "Unknown error" };
//   }
// }
