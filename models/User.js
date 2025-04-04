import mongoose from "mongoose";



const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes leading/trailing spaces
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email is unique
      lowercase: true, // Converts the email to lowercase
      match: [/.+\@.+\..+/, "Please enter a valid email address"], // Email regex validation
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password should be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Only 'user' or 'admin' are allowed
      default: "user", // Default role is 'user'
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
  }
);


export default mongoose.models.User || mongoose.model("User", userSchema);

