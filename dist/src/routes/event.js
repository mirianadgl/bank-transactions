"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/event", (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(201).send({ message: "Evento Criado", data });
});
exports.default = router;
