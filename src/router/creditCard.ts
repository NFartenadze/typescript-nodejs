import express from "express";
import {
  createNewCreditCard,
  deleteCreditCard,
  getAllCreditCards,
  getSpecificCreditCard,
  updateCreditCard,
} from "../controllers/creditCardController";

const router = express.Router();

router.get("/", getAllCreditCards);
router.get("/:userId", getSpecificCreditCard);
router.post("/", createNewCreditCard);
router.delete("/:id", deleteCreditCard);
router.put("/:userId", updateCreditCard);

export default router;
