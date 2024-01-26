import express from "express";
import {
  createNewUser,
  deleteAllUsers,
  deleteUser,
  getAllUsers,
} from "../controllers/userController";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.delete("/:id", deleteUser);
router.delete("/clear-collection", deleteAllUsers);

export default router;
