import express from "express";
import userRouter from "./src/features/users/user.routes.js";
const port = 7100;

const app = express();

app.use(express.json());

app.use("/api/v1", userRouter);

// Test Route
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome To Postaway API");
// });

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server Running On Port ${port}`);
});
