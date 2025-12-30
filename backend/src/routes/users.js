import express from "express";
import {
  getProfile,
  updateProfile,
  changePassword,
  getAllUsers,
  activateUser,
  deactivateUser,
  deleteUser
} from "../controllers/userController.js";

import {
  authenticate,
  authorizeRoles
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/me", authenticate, getProfile);
router.put("/me", authenticate, updateProfile);
router.put("/me/password", authenticate, changePassword);

router.get("/", authenticate, authorizeRoles("admin"), getAllUsers);
router.put("/:id/activate", authenticate, authorizeRoles("admin"), activateUser);
router.put("/:id/deactivate", authenticate, authorizeRoles("admin"), deactivateUser);


router.delete(
  "/:id",
  authenticate,
  authorizeRoles("admin"),
  deleteUser
);

export default router;
