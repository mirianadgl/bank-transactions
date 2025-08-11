import { Router } from "express";
import { event } from "../controllers/event";

const router = Router()

router.post("/event", event)


export default router