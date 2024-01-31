import express from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  getSpecificUser,
} from "../controllers/userController";

const router = express.Router();
router.get("/", getAllUsers);
router.get("/:id", getSpecificUser);
router.post("/", createNewUser);
router.delete("/:id", deleteUser);

export default router;
