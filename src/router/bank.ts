import express from "express";
import {
  createNewBank,
  deleteBank,
  getAllBanks,
  getSpecificBank,
  updateBank,
} from "../controllers/bankController";

const router = express.Router();

router.get("/", getAllBanks);
router.get("/:name", getSpecificBank);
router.post("/", createNewBank);
router.delete("/:name", deleteBank);
router.put("/:name", updateBank);

export default router;
