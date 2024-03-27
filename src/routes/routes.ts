import { Router } from "express";
import { getData } from "../controllers/controller";

const router = Router();

router.get("/", getData);

export default router;
