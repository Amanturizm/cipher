export interface ICode {
  password: string;
  message: string;
}

export interface ICodeApi {
  [code: string]: string;
}

export interface ICipherForm {
  decoded: string;
  password: string;
  encoded: string;
}