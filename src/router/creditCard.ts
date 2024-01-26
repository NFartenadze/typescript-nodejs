import express from "express";
import { createNewCreditCard, getCreditCards } from "../controllers/creditCardController";

const router = express.Router();

router.get("/", getCreditCards);
router.post("/", createNewCreditCard);

export default router;
