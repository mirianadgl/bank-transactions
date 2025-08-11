"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_1 = require("../controllers/event");
const router = (0, express_1.Router)();
router.post("/event", event_1.event);
exports.default = router;
