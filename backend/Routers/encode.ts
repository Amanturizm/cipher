import express from "express";
import { ICode } from "../types";

const encodeRouter = express.Router();
const Vigenere = require('caesar-salad').Vigenere;

encodeRouter.post('/', (req, res) => {
  const { password, message } = req.body as ICode;

  res.send({ encoded: Vigenere.Cipher(password).crypt(message) });
});

export default encodeRouter;