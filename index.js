const express = require("express");
const portfolioRouter = require("./routes/portfolio");
const testimonialsRouter = require("./routes/testimonials");
const clientRouter = require("./routes/client");
const adminRouter = require("./routes/admin");
const { createUser } = require("./migrations");
const connectDB = require("./db");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port =  3001;

// app.use("/", express.static(path.join(__dirname, "client/build")));
connectDB();
app.use(express.json());

// Configure CORS middleware
app.use(
  cors({
    origin: ["https://kartalucia.com","http://localhost:3000"],
  })
); // Allow all CORS requests by default

app.use("/api/portfolio", portfolioRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/client", clientRouter);
app.use("/api/admin", adminRouter);

app.get("/api/health", (req, res) => {
  res.send("fine");
});

async function connect() {
  try {
    createUser();
  } catch (e) {
    console.log(e);
  }
}

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
