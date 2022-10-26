import type { Request, Response } from "express";
import { Version } from "../types";
import { success, useDate } from "../utils";

export const getVersion = (req: Request, res: Response) => {
  const result: Version = {
    now: useDate(),
    version: process.env.VERSION ?? "-",
    developer: "전상욱",
  };

  res.send(success(result));
};
