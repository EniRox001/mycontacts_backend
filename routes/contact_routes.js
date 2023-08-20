import express from "express";
import {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} from "../controllers/contact_controller.js";
import validateToken from "../middleware/validate_token_handler.js";

const router = express.Router();

router.use(validateToken);
router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export default router;
