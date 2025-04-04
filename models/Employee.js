import mongoose from "mongoose";


const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,

    },
    salary: {
      type: Number,
    },
    days: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Employee || mongoose.model("Employee", employeeSchema);