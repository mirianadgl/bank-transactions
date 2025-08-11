import express from 'express';

import balanceRoutes from "./routes/balance"
import eventRoutes from "./routes/event"

const app = express();
const PORT = 3000;

app.use(express.json()); //interpretar como json no body
app.use(balanceRoutes);
app.use(eventRoutes)


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
