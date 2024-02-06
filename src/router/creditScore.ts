import express from "express";
import {
  createNewCreditScore,
  deleteCreditScore,
  getAllCreditScores,
  getSpecificCreditScore,
  updateCreditScore,
} from "../controllers/creditScoreController";

const router = express.Router();

router.get("/", getAllCreditScores);
router.get("/:id", getSpecificCreditScore);
router.post("/", createNewCreditScore);
router.delete("/:id", deleteCreditScore);
router.put("/:id", updateCreditScore);

export default router;
