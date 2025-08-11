"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.balance = balance;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function balance(req, res) {
    const id = req.query.account_id;
    console.log("aqui", id);
    const data = JSON.parse(fs_1.default.readFileSync(path_1.default.join(process.cwd(), 'data/data.json'), "utf-8"));
    console.log(data);
    const result = data.account.find((value) => value.id === id);
    console.log(result);
    if (result) {
        return res.status(200).json(result.balance); //Get balance from existing account
    }
    else if (result === undefined) {
        return res.status(404).json(0); //Get balance from non-existing account
    }
}
