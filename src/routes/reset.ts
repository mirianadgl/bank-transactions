import { Router } from "express";
import { reset } from "../controllers/reset"

const router = Router()

router.post("/reset", reset)

export default router