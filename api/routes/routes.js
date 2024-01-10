import { Router } from "express";
import testimonial from "../controllers/testimonial.controllers.js";
import packageController from "../controllers/package.controllers.js";
import contact from "../controllers/contact.controllers.js";
import umrah from "../controllers/umrah.controllers.js";
import deletepackage from "../controllers/delete.controllers.js";
const router = Router();

router.post("/api/v1/testimonial",testimonial);
router.post("/api/v1/package",packageController)
router.post("/api/v1/contact",contact)
router.get("/api/v1/umrah",umrah)
router.delete("/api/v1/deletepackage/:id",deletepackage)

export default router;