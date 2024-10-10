const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

require("./config/db");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require("cookie-parser");

app.use(cookieParser());

const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");

app.use("/api/v1", userRoutes);
app.use("/api/v1/quiz", quizRoutes);

app.get("/", (req, res) => {
  res.send(
    "<center><h1>Quiz Application </h1><br>Get Recipe Api <a href=https://github.com/Devanshiballar/Quiz_Application.git target=_blank>Repository :Quiz Application</a></center>"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
