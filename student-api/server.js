const express = require("express");
const app = express();
const studentRoutes = require("./routes/students");
const errorHandler = require("./middleware/errorHandler");
const PORT = 3000;

// for Middleware
app.use(express.json());

//  for Routes
app.use("/students", studentRoutes);

//  for Error Handler
app.use(errorHandler);

//  run Server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});