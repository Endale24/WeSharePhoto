const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const usersRouter = require("./routes/users");
const albumsRouter = require("./routes/albums");

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Use the routes
app.use("/users", usersRouter);
app.use("/albums", albumsRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
