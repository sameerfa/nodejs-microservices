import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const endpoints = {
  login: "http://localhost:3000",
  users: "http://localhost:3001",
};

app.get("/", function (req, res, next) {
  res.send("This is the API Gateway");
});

app.all(
  "/login*",
  createProxyMiddleware({
    target: endpoints.login,
    changeOrigin: true,
  })
);
app.all(
  "/users*",
  createProxyMiddleware({ target: endpoints.users, changeOrigin: true })
);

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log("server is listening on " + port);
});
