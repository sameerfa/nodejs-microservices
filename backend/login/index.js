import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import loginRouter from "./routes/login.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/login", loginRouter);

const CONNECTION_URL =
  process.env.CONNECTION_URL || "mongodb://localhost:27017/visteon-login-db";
const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
