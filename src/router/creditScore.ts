import express from "express";
import {
  createNewCreditScore,
  getAllCreditScores,
} from "../controllers/creditScoreController";

const router = express.Router();

router.get("/", getAllCreditScores);
router.post("/", createNewCreditScore);

export default router;
