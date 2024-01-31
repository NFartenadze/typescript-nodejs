import express from "express";
import {
  createNewTransaction,
  deleteTransaction,
  getAllTransactions,
  getSpecificTransaction,
} from "../controllers/transactionController";

const router = express.Router();

router.get("/", getAllTransactions);
router.get("/:id", getSpecificTransaction);
router.post("/", createNewTransaction);
router.delete("/:id", deleteTransaction);

export default router;
