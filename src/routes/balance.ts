import { Router } from "express";
import { balance } from "../controllers/balance"

const router = Router()

router.get("/balance", balance)

export default router