import express from "express";
import {
  createNewCreditScore,
  deleteCreditScore,
  getAllCreditScores,
  getSpecificCreditScore,
} from "../controllers/creditScoreController";

const router = express.Router();

router.get("/", getAllCreditScores);
router.get("/:id", getSpecificCreditScore);
router.post("/", createNewCreditScore);
router.delete("/:id", deleteCreditScore);

export default router;
