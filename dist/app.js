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
//GET => buscar um recurso do back-end
//POST => criar um recurso do back-end
//PUT => editar ou atualizar um recurso ou uma entidade quase por completo (ex: um formulário do usuário)
//PATCH => atualizar uma informação única ou específica de um recurso no back-end (ex: aceitar notificação)
//DELETE => deletar um recurso do back-end
//stateful = sempre tem algum tipo de informação guardado em memória
//stateles = náo tem informações guardado em memória
//cabeçalhos da request/response => são metadados, informações pra que tanto o back-end quanto o front-end saiba lidar com aquela requisição
//http status code
//readable streams writeable streams
const app = (0, express_1.default)();
const PORT = 3000;
// const events: Data = JSON.parse(fs.readFileSync("../data/data.json", "utf-8"))
app.use(express_1.default.json());
app.use(event_1.default);
app.use(balance_1.default);
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
