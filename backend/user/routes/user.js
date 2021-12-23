import express from "express";
const router = express.Router();

import auth from "../middleware/auth.js";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

router.get("/", auth, getUsers);
router.get("/:id", auth, getUser);
router.post("/", auth, createUser);
router.patch("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

export default router;
