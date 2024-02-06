import express from "express";
import usersRoutes from "./users";
import bankRoutes from "./bank";
import accountRoutes from "./account";
import creditCardRoutes from "./creditCard";
import creditScoreRoutes from "./creditScore";
import loanRoutes from "./loan";
import savingAccountRoutes from "./savingAccount";
import transactionRoutes from "./transaction";

// configuring routes
const router = express.Router();

export default (): express.Router => {
  router.use("/users", usersRoutes);
  router.use("/bank", bankRoutes);
  router.use("/account", accountRoutes);
  router.use("/credit-card", creditCardRoutes);
  router.use("/credit-score", creditScoreRoutes);
  router.use("/loan", loanRoutes);
  router.use("/saving-account", savingAccountRoutes);
  router.use("/transaction", transactionRoutes);

  return router;
};
