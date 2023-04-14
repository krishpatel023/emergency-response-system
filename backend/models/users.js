import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
    // img: {
    //   type: String,
    // },
    // city: {
    //   type: String,
    // },
    // phone: {
    //   type: String,
    // },
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },
    // employee: {
    //   isEmployee : {
    //     type: Boolean,
    //     default: false,
    //   },
    //   worksAt : {
    //     type: String,
    //   }
    // }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);