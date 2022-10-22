import type { Request, Response } from "express";
import { success } from "../hooks/useApiResponse";
import useDate from "../hooks/useDate";
import { Version } from "../types";

export const getVersion = (req: Request, res: Response) => {
  const result: Version = {
    now: useDate(),
    version: process.env.VERSION ?? "-",
    developer: "전상욱",
  };

  res.send(success(result));
};
