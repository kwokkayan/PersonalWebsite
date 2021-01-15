const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users");
const billsRoutes = require("./routes/bills");
const todosRoutes = require("./routes/todos");
const recipesRoutes = require("./routes/recipes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

// Loading environment variable using dotenv
const dotenv = require("dotenv");
dotenv.config();

// Starting server
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server Started At Port ${port}`);
});

// Connecting to database
const dbUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/data?retryWrites=true&w=majority`;

mongoose.connect(
  dbUri,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(dbUri);
      console.log("Database Connection Error: " + err.message);
    }
  }
);

// Handling connection error
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected To Database");
});
db.on("error", (err) => {
  console.log("Database Error:" + err.message);
});

// Using middleware
app.use(express.json());

// Getting client IP
app.get("/api/ip", async (req, res) => {
  let clientIP = "";
  clientIP = req.ip;
  res.send(clientIP);
});

// Implementing access control
app.use("/api", authMiddleware.requireAuth);

// Importing routes
app.use(usersRoutes);
app.use("/api/bills", billsRoutes);
app.use("/api/todos", todosRoutes);
app.use("/api/recipes", recipesRoutes);
