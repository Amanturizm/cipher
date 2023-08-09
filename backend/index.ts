import express from 'express';
import cors from 'cors';
import encodeRouter from "./Routers/encode";
import decodeRouter from "./Routers/decode";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/encode', encodeRouter);
app.use('/decode', decodeRouter);

app.get('*', (_, res) => res.sendStatus(404));

app.listen(port, () => console.log(`Server running at ${port} port...`));