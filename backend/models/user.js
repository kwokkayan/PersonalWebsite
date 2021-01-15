const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please Enter An Email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Plater Enter A Valid Email"],
    },
    username: {
      type: String,
      required: [true, "Please Enter A Username"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter A Password"],
      minlength: [6, "Password Must Be Consisted of 6 Characters Or More"],
    },
    userId: {
      type: Number,
    },
    role: {
      type: String,
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: "true",
    },
  },
  { timestamps: true }
);

// Hashing the password before storing to database
userSchema.pre("save", async function (next) {
  const hash = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, hash);
  next();
});

// Static method to login user
userSchema.statics.login = async function (emailOrUsername, password) {
  const user = await this.findOne({
    emailOrUsername,
  });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Incorrect Email/Username");
};

const User = mongoose.model("User", userSchema);

module.exports = User;
