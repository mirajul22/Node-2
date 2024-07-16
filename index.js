const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const connectdb = require("./src/config/db");
const UserRouter = require("./src/Routes/UserRoutes");
const PORT = 4000;

connectdb();
app.use(express.json());

app.use("/", UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
