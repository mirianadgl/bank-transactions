"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_1 = __importDefault(require("./routes/event"));
const balance_1 = __importDefault(require("./routes/balance"));
// import fs from "fs";
// type Account = {
//     id: string;
//     balance: number;
// }
// type Data = {
//     account: Account[]
// }
const app = (0, express_1.default)();
const port = 3000;
// const events: Data = JSON.parse(fs.readFileSync("../data/data.json", "utf-8"))
app.use(express_1.default.json());
app.use(event_1.default);
app.use(balance_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
