import { Router } from "express";
import testimonial from "../controllers/testimonial.controllers.js";
import packageController from "../controllers/package.controllers.js";
import contact from "../controllers/contact.controllers.js";
const router = Router();

router.post("/api/v1/testimonial",testimonial);
router.post("/api/v1/package",packageController)
router.post("/api/v1/contact",contact)

export default router;