import express from "express";
const port = 7100;

const app = express();

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
