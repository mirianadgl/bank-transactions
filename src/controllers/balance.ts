import { Request, Response } from "express";
import fs from "fs"
import path from "path";

type Account = {
    id: string;
    balance: number;
}

type Data = {
    account: Account[]
}

export function balance(req: Request, res: Response) {
    const id = req.query.account_id
    console.log("aqui", id)
    const data: Data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/data.json'), "utf-8"))

    console.log(data)

     const result = data.account.find((value) => value.id === id)
     console.log(result)
    
    if(result) {
        return res.status(200).json(result.balance) //Get balance from existing account
    } else if(result === undefined) {
        return res.status(404).json(0) //Get balance from non-existing account
    }
  
}

