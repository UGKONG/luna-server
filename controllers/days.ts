import type { Request, Response } from "express";
import { fail, useDatabase, success } from "../utils";

// 날짜 조회
export const getDays = async (req: Request, res: Response) => {
  const USER_ID = req?.body?.USER_ID;
  const APP_PLATFORM = req?.body?.APP_PLATFORM;
  const YM = req?.body?.YM;

  if (!USER_ID || !APP_PLATFORM || !YM || YM?.length !== 6) {
    return res.send(
      fail("!USER_ID || !APP_PLATFORM || !YM || YM?.length !== 6")
    );
  }

  let { error, result } = await useDatabase(
    `
    SELECT *
    FROM tb_days
    WHERE USER_ID = ?
    AND APP_PLATFORM = ?
    AND (
      DATE_FORMAT(START_DATE, '%Y%m') = ? OR
      DATE_FORMAT(END_DATE, '%Y%m') = ?
    )
  `,
    [USER_ID, APP_PLATFORM, YM, YM]
  );

  if (error) return res.send(fail());

  res.send(success(result));
};

// 종료일 저장
export const putDays = async (req: Request, res: Response) => {
  const USER_ID = req?.body?.USER_ID;
  const APP_PLATFORM = req?.body?.APP_PLATFORM;
  const DAYS_ID = req?.body?.DAYS_ID;
  const DATE = req?.body?.DATE;

  if (!USER_ID || !APP_PLATFORM || !DAYS_ID || !DATE) {
    return res.send(fail("!USER_ID || !APP_PLATFORM || !DAYS_ID || !DATE"));
  }

  let { error } = await useDatabase(
    `
    UPDATE tb_days SET
    END_DATE = ?
    WHERE USER_ID = ?
    AND APP_PLATFORM = ?
    AND DAYS_ID = ?
  `,
    [DATE, USER_ID, APP_PLATFORM, DAYS_ID]
  );

  if (error) return res.send(fail());

  res.send(success(null));
};

// 시작일 저장
export const postDays = async (req: Request, res: Response) => {
  const USER_ID = req?.body?.USER_ID;
  const APP_PLATFORM = req?.body?.APP_PLATFORM;
  const DATE = req?.body?.DATE;

  if (!USER_ID || !APP_PLATFORM || !DATE) {
    return res.send(fail("!USER_ID || !APP_PLATFORM || !DATE"));
  }

  let { error } = await useDatabase(
    `
    INSERT INTO tb_days (
      USER_ID, APP_PLATFORM, START_DATE
    ) VALUES (
      ?, ?, ?
    )
  `,
    [USER_ID, APP_PLATFORM, DATE]
  );

  if (error) return res.send(fail());

  res.send(success(null));
};
