import express from "express";
import {
  deleteUsers,
  getAllUsers,
  updateUser,
} from "../controllers/userController";

export default (router: express.Router) => {
  router.get("/users", getAllUsers);
  router.delete("/users/:id", deleteUsers);
  router.patch("/users/:id", updateUser);
};
