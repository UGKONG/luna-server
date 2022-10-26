// import use from "../types";
import type { Request, Response } from "express";
import { fail, success, useDatabase } from "../utils";

// 사용기록 조회
export const getUse = async (req: Request, res: Response) => {
  const USER_ID: string = req?.body?.USER_ID ?? req?.query?.USER_ID;
  const APP_PLATFORM: string =
    req?.body?.APP_PLATFORM ?? req?.query?.APP_PLATFORM;
  const YM: string = req?.body?.YM ?? req?.query?.YM;

  if (!USER_ID || !APP_PLATFORM || !YM) {
    return res.send(fail());
  }

  const { error, result, sql } = await useDatabase(
    `
    SELECT *
    FROM tb_use
    WHERE USER_ID = ?
    AND APP_PLATFORM = ?
    AND DATE_FORMAT(USE_DATE, '%Y%m') = ?
  `,
    [USER_ID, APP_PLATFORM, YM]
  );

  if (error) return res.send(fail());

  res.send(success(result));
};

// 사용기록 저장
export const postUse = async (req: Request, res: Response) => {
  const USER_ID = req?.body?.USER_ID;
  const APP_PLATFORM = req?.body?.APP_PLATFORM;
  const DEVICE_ID = req?.body?.DEVICE_ID;
  const DEVICE_NAME = req?.body?.DEVICE_NAME;
  const USE_MODE = req?.body?.USE_MODE;
  const USE_POWER = req?.body?.USE_POWER;
  const USE_TIMER = req?.body?.USE_TIMER;
  const USE_BATTERY = req?.body?.USE_BATTERY;

  if (
    USER_ID === undefined ||
    APP_PLATFORM === undefined ||
    DEVICE_ID === undefined ||
    DEVICE_NAME === undefined ||
    USE_MODE === undefined ||
    USE_POWER === undefined ||
    USE_TIMER === undefined ||
    USE_BATTERY === undefined
  ) {
    return res.send(fail());
  }

  const { error, result, sql } = await useDatabase(
    `
    INSERT INTO tb_use (
      USER_ID, APP_PLATFORM, DEVICE_ID, DEVICE_NAME, 
      USE_MODE, USE_POWER, USE_TIMER, USE_BATTERY
    ) VALUES (
      ?, ?, ?, ?, 
      ?, ?, ?, ?
    );
  `,
    [
      USER_ID,
      APP_PLATFORM,
      DEVICE_ID,
      DEVICE_NAME,
      USE_MODE,
      USE_POWER,
      USE_TIMER,
      USE_BATTERY,
    ]
  );

  if (error) {
    console.log(error);
    return res.send(fail());
  }

  res.send(success(result));
};
