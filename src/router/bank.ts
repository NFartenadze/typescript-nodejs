import express from "express";
import { createNewBank, getAllBanks } from "../controllers/bankController";

const router = express.Router();

router.get("/", getAllBanks);
router.post("/", createNewBank);

export default router;
