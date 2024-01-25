import express from "express";
import usersRoutes from "./users";
import bankRoutes from "./bank";
import accountRoutes from "./account";

// configuring routes
const router = express.Router();

export default (): express.Router => {
  router.use("/users", usersRoutes);
  router.use("/bank", bankRoutes);
  router.use("/account", bankRoutes);
  // router.use("/bank", bankRoutes);

  return router;
};
