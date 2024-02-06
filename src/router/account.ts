import express from "express";
import {
  createNewAccount,
  deleteAccount,
  getAllAccounts,
  getSpecificAccount,
  updateAccount,
} from "../controllers/accountController";

const router = express.Router();

router.get("/", getAllAccounts);
router.get("/:number", getSpecificAccount);
router.post("/", createNewAccount);
router.delete("/:number", deleteAccount);
router.put("/:number", updateAccount);

export default router;
