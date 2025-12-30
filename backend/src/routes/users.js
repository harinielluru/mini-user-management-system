const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile,
  changePassword,
  getAllUsers,
  activateUser,
  deactivateUser,
} = require("../controllers/userController");

const {
  authenticate,
  authorizeRoles,
} = require("../middleware/authMiddleware");

router.get("/me", authenticate, getProfile);
router.put("/me", authenticate, updateProfile);
router.put("/me/password", authenticate, changePassword);

router.get("/", authenticate, authorizeRoles("admin"), getAllUsers);
router.put("/:id/activate", authenticate, authorizeRoles("admin"), activateUser);
router.put("/:id/deactivate", authenticate, authorizeRoles("admin"), deactivateUser);

module.exports = router;
