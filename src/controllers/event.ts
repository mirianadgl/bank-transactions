import { Request, Response } from "express";
import fs from "fs"
import path from "path";


type Account = {
    id: string;
    balance: number;
}

type Data = {
    account: Account[];
}
type EventBody = {
    type: "deposit" | "withdraw" | "transfer";
    destination?: string;
    origin?: string;
    amount: number;
}

export function event(req:Request, res: Response) {
    const { type, destination, origin, amount}: EventBody = req.body
    const data: Data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/data.json'), "utf-8"));
    const destinationAccount = data.account.find((value) =>value.id === destination);
    const originAccount = data.account.find((value) => value.id === origin)
    
    console.log(data, "rota /event")
    console.log(req.body)
    
    if(type === "deposit" && destination) {
        
        if(!destinationAccount) { //Create account with inicial balance (201)
            console.log("náo tem conta pra deposito:", destination, destinationAccount);
            data.account.push({
                id: destination,
                balance: amount
            });
        } else { //Deposit into existing account (201)
            console.log("tem conta sim pra deposito", destination, destinationAccount);
            destinationAccount.balance += amount;
        }

        fs.writeFileSync(path.join(process.cwd(), 'data/data.json'),JSON.stringify(data, null, 2),"utf-8");
        return res.status(201).json({destination: { id: destination, balance: destinationAccount ? destinationAccount.balance : amount}});
    }

    if(type === "withdraw") {
        if(!destinationAccount) { //Withdraw from non-existing account (404)
            console.log("saque sem conta");
            return res.status(404).json(0);
        } else { //Withdraw from existing account (201)
            console.log("saque com conta")
            destinationAccount.balance -= amount;
            fs.writeFileSync(path.join(process.cwd(), 'data/data.json'),JSON.stringify(data, null, 2),"utf-8");
            return res.status(201).json({destination: { id: destination, balance: destinationAccount.balance}});
        }
    }

    if(type === "transfer") { //Transfer from non-existing account (404)
        if(!destinationAccount || !originAccount) {
            console.log("transferencia sem conta");
            return res.status(404).json(0);
        }
        else { //Transfer from existing account (201)
            console.log("transferencia com conta");
            originAccount.balance -= amount;
            destinationAccount.balance += amount;
            fs.writeFileSync(path.join(process.cwd(), 'data/data.json'),JSON.stringify(data, null, 2),"utf-8");
            return res.status(201).json({origin: {id: origin, balance: originAccount.balance}, destination: { id: destination, balance: destinationAccount.balance}});
        }
    }
    
}