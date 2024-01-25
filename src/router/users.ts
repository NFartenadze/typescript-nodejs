import express from "express";
import { createNewUser, getAllUsers } from "../controllers/userController";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createNewUser);

export default router;
