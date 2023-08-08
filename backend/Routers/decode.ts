import express from "express";
import { ICode } from "../types";

const decodeRouter = express.Router();
const Vigenere = require('caesar-salad').Vigenere;

decodeRouter.post('/', (req, res) => {
  const { password, message } = req.body as ICode;

  res.send({ decoded: Vigenere.Decipher(password).crypt(message) });
});

export default decodeRouter;