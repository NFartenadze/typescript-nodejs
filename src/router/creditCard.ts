import express from "express";
import {
  createNewCreditCard,
  getAllCreditCards,
  getSpecificCreditCard,
  updateCreditCard,
} from "../controllers/creditCardController";

const router = express.Router();

router.get("/", getAllCreditCards);
router.get("/:userId", getSpecificCreditCard);
router.post("/", createNewCreditCard);
router.delete("/:userId", createNewCreditCard);
router.put("/:userId", updateCreditCard);

export default router;
