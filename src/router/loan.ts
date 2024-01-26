import express from "express";
import { createNewLoan, getAllLoans } from "../controllers/loanController";

const router = express.Router();

router.get("/", getAllLoans);
router.post("/", createNewLoan);

export default router;
