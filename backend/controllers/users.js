const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Handling erros
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { emailOrUsername: "", password: "" };

  // Incorrect emailOrUsername
  if (err.message === "Incorrect Email/Username") {
    errors.emailOrUsername = "That email/username is not registered";
  }

  // Incorrect password
  if (err.message === "Incorrect Password") {
    errors.password = "That password is invalid";
  }

  // Duplicate email error
  if (err.code === 11000) {
    errors.emailOrUsername = "That email is already registered";
    return errors;
  }

  // Validation erros
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// Json Web Token (JWT)
const maxAge = 60 * 60 * 24;

const createToken = (id) => {
  return (
    "Bearer " +
    jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: maxAge,
    })
  );
};

const loginPost = async (req, res) => {
  const { emailOrUsername, password } = req.body;

  try {
    const user = await User.login(emailOrUsername, password);
    const token = createToken(user._id);
    res.set("authorization", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({
      success: 1,
      message: {
        auth: "user logged in",
      },
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ success: 0, errors });
  }
};

const logoutPost = async (req, res) => {
  res.set("authorization", "", { maxAge: 1 });
  res.json({
    success: 1,
    message: {
      auth: "user logged out",
    },
  });
};

const signupPost = async (req, res) => {
  const userData = req.body;

  try {
    const user = await User.create(userData);
    const token = createToken(user._id);
    res.set("authorization", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({
      success: 1,
      message: {
        auth: "user created",
      },
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ sucess: 0, errors });
  }
};

module.exports = {
  loginPost,
  logoutPost,
  signupPost,
};
