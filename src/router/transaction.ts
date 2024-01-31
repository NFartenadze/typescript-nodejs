import express from "express";
import {
  createNewTransaction,
  deleteTransaction,
  getAllTransactions,
  getSpecificTransaction,
  updateTransaction,
} from "../controllers/transactionController";

const router = express.Router();

router.get("/", getAllTransactions);
router.get("/:id", getSpecificTransaction);
router.post("/", createNewTransaction);
router.delete("/:id", deleteTransaction);
router.put("/:id", updateTransaction);

export default router;
