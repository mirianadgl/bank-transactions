import { Request, Response } from "express";
import fs from "fs"
import path from "path";

export function reset (req: Request, res: Response) {
     const dataFrom = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/data-origin.json'), "utf-8"));
     console.log(dataFrom)
     fs.writeFileSync(path.join(process.cwd(), 'data/data.json'),JSON.stringify(dataFrom, null, 2),"utf-8");
     return res.status(200).json("OK") 
}
