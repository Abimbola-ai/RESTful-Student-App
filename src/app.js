const express = require("express");
const mongoose = require("mongoose");
const app = express();
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");
const port = 9000;

// Connect to the DB
const url = "mongodb://localhost:27017/studentsDB";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Confirm connection
mongoose.connection.once('open', function () {
  console.log('Database connected Successfully');
}).on('error', function (err) {
  console.log('Error', err);
});

// Middleware to parse JSON requests (place this before defining routes)
app.use(express.json());

// See incoming request
app.use((req, res, next) => {
  console.log('Received request:', req.method, req.url, req.body);
  next();
});

// Define routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Handle other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
