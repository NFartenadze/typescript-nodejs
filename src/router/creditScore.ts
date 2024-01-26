import express from "express";
import { createNewCreditScore, getCreditScores } from "../controllers/creditScoreController";

const router = express.Router();

router.get("/", getCreditScores);
router.post("/", createNewCreditScore);

export default router;
