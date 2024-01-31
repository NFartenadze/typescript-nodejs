import express from "express";
import {
  createNewSavingAccount,
  deleteSavingAccount,
  getAllSavingAccounts,
  getSpecificSavingAccount,
  updateSavingAccount,
} from "../controllers/savingAccountController";

const router = express.Router();

router.get("/", getAllSavingAccounts);
router.get("/:number", getSpecificSavingAccount);
router.post("/", createNewSavingAccount);
router.delete("/:number", deleteSavingAccount);
router.put("/:number", updateSavingAccount);

export default router;
