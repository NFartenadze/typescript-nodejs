import express from "express";
import {
  createNewAccount,
  getAllAccounts,
} from "../controllers/accountController";

const router = express.Router();

router.get("/", getAllAccounts);
router.post("/", createNewAccount);

export default router;
