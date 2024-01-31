import express from "express";
import {
  createNewAccount,
  deleteAccount,
  getAllAccounts,
  getSpecificAccount,
} from "../controllers/accountController";

const router = express.Router();

router.get("/", getAllAccounts);
router.get("/:id", getSpecificAccount);
router.post("/", createNewAccount);
router.delete("/", deleteAccount);

export default router;
