"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const balance_1 = __importDefault(require("./routes/balance"));
const event_1 = __importDefault(require("./routes/event"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json()); //interpretar como json no body
app.use(balance_1.default);
app.use(event_1.default);
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
