import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { type: String, default: "USER" },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

const User = models.User || model("User", userSchema);

export default User;
