"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = event;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function event(req, res) {
    const { type, destination, origin, amount } = req.body;
    const data = JSON.parse(fs_1.default.readFileSync(path_1.default.join(process.cwd(), 'data/data.json'), "utf-8"));
    const destinationAccount = data.account.find((value) => value.id === destination);
    const originAccount = data.account.find((value) => value.id === origin);
    console.log(data, "rota /event");
    console.log(req.body);
    if (type === "deposit" && destination) {
        if (!destinationAccount) { //Create account with inicial balance (201)
            console.log("náo tem conta pra deposito:", destination, destinationAccount);
            data.account.push({
                id: destination,
                balance: amount
            });
        }
        else { //Deposit into existing account (201)
            console.log("tem conta sim pra deposito", destination, destinationAccount);
            destinationAccount.balance += amount;
        }
        fs_1.default.writeFileSync(path_1.default.join(process.cwd(), 'data/data.json'), JSON.stringify(data, null, 2), "utf-8");
        return res.status(201).json({ destination: { id: destination, balance: destinationAccount ? destinationAccount.balance : amount } });
    }
    if (type === "withdraw") {
        if (!destinationAccount) {
            console.log("saque sem conta");
            return res.status(404).json(0);
        }
        else {
            console.log("saque com conta");
            destinationAccount.balance -= amount;
            fs_1.default.writeFileSync(path_1.default.join(process.cwd(), 'data/data.json'), JSON.stringify(data, null, 2), "utf-8");
            return res.status(201).json({ destination: { id: destination, balance: destinationAccount.balance } });
        }
    }
    if (type === "transfer") {
        if (!destinationAccount || !originAccount) {
            console.log("transferencia sem conta");
            return res.status(404).json(0);
        }
        else {
            console.log("transferencia com conta");
            originAccount.balance -= amount;
            destinationAccount.balance += amount;
            fs_1.default.writeFileSync(path_1.default.join(process.cwd(), 'data/data.json'), JSON.stringify(data, null, 2), "utf-8");
            return res.status(201).json({ origin: { id: origin, balance: originAccount.balance }, destination: { id: destination, balance: destinationAccount.balance } });
        }
    }
}
// router.post("/event", (req, res) => {
//     const data = req.body
//     console.log(data);
//     res.status(201).send({ message: "Evento Criado", data})
// })
//create account with inicial balance (201)
//POST /event "type": "deposit"
//deposit into existing account (201)
//POST /event "type": "deposit"
//withdraw from non-existing account (404)
//POST /event "type": "transfer"
//withdraw from existing account (201)
//POST /event "type": "transfer"
//transfer from existing account (201)
//POST /event "type": "transfer"
//transfer from non-existing account (404)
//POST /event "type": "transfer"
