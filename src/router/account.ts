import express from "express";
import {
  createNewAccount,
  deleteAccount,
  getAllAccounts,
  getSpecificAccount,
} from "../controllers/accountController";

const router = express.Router();

router.get("/", getAllAccounts);
router.get("/:number", getSpecificAccount);
router.post("/", createNewAccount);
router.delete("/number", deleteAccount);

export default router;
