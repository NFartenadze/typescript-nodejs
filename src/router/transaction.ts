import express from "express";
import {
  createNewTransaction,
  getAllTransactions,
} from "../controllers/transactionController";

const router = express.Router();

router.get("/", getAllTransactions);
router.post("/", createNewTransaction);

export default router;
