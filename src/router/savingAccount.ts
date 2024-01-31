import express from "express";
import {
  createNewSavingAccount,
  deleteSavingAccount,
  getAllSavingAccounts,
  getSpecificSavingAccount,
} from "../controllers/savingAccountController";

const router = express.Router();

router.get("/", getAllSavingAccounts);
router.get("/:number", getSpecificSavingAccount);
router.post("/", createNewSavingAccount);
router.delete("/:number", deleteSavingAccount);

export default router;
