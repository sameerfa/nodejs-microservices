import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/user.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

const CONNECTION_URL =
  process.env.CONNECTION_URL || "mongodb://localhost:27017/visteon-user-db";
const PORT = process.env.PORT || 3001;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
