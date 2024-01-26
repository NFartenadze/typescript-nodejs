import express from "express";
import {
  createNewCreditCard,
  getAllCreditCards,
} from "../controllers/creditCardController";

const router = express.Router();

router.get("/", getAllCreditCards);
router.post("/", createNewCreditCard);

export default router;
