"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const balance_1 = require("../controllers/balance");
const router = (0, express_1.Router)();
router.get("/balance", balance_1.balance);
exports.default = router;
