import type { Request, Response } from "express";
import { fail, success, useDatabase } from "../utils";

export const userLogin = async (req: Request, res: Response) => {
  const AUTH_ID: string = req?.body?.AUTH_ID;
  const USER_NAME: string = req?.body?.USER_NAME;
  const SNS_PLATFORM: string = req?.body?.SNS_PLATFORM;
  const APP_PLATFORM: string = req?.body?.APP_PLATFORM;

  if (!AUTH_ID || !USER_NAME || !SNS_PLATFORM || !APP_PLATFORM) {
    return res.send(fail());
  }

  let response = await useDatabase(
    `
    SELECT *
    FROM tb_user
    WHERE AUTH_ID = ?
    AND USER_NAME = ?;
  `,
    [AUTH_ID, USER_NAME]
  );

  if (response?.error) return res.send(fail());

  let user = response?.result[0];

  if (user) return res.send(success(user));

  response = await useDatabase(
    `
    INSERT INTO tb_user (
      AUTH_ID, USER_NAME, SNS_PLATFORM, APP_PLATFORM
    ) VALUES (
      ?, ?, ?, ?
    );
    SELECT *
    FROM tb_user
    WHERE AUTH_ID = ?
    AND USER_NAME = ?;
    `,
    [AUTH_ID, USER_NAME, SNS_PLATFORM, APP_PLATFORM, AUTH_ID, USER_NAME]
  );

  user = response?.result[1][0];
  if (!user) return res.send(fail());

  res.send(success(user));
};
