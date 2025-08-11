import express from 'express';

import balanceRoutes from "./routes/balance"
import eventRoutes from "./routes/event"
import resetRoutes from "./routes/reset"

const app = express();
const PORT = 3000;

app.use(express.json()); //interpretar como json no body
app.use(balanceRoutes);
app.use(eventRoutes);
app.use(resetRoutes);


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
