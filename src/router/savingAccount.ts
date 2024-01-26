import express from "express";
import {
  createNewSavingAccount,
  getAllSavingAccounts,
} from "../controllers/savingAccountController";

const router = express.Router();

router.get("/", getAllSavingAccounts);
router.post("/", createNewSavingAccount);

export default router;
