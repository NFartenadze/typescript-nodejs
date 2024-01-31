import express from "express";
import {
  createNewLoan,
  deleteLoan,
  getAllLoans,
  getSpecificLoan,
  updateLoan,
} from "../controllers/loanController";

const router = express.Router();

router.get("/", getAllLoans);
router.get("/:id", getSpecificLoan);
router.post("/", createNewLoan);
router.delete("/:id", deleteLoan);
router.put("/:id", updateLoan);

export default router;
