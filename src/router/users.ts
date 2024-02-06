import express from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  getSpecificUser,
  updateUser,
} from "../controllers/userController";

const router = express.Router();
router.get("/", getAllUsers);
router.get("/:id", getSpecificUser);
router.post("/", createNewUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
