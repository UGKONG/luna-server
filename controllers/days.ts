import type { Request, Response } from "express";
import { fail, useDatabase, success } from "../utils";

// 날짜 조회
export const getDays = async (req: Request, res: Response) => {
  const USER_ID = req?.body?.USER_ID ?? req?.query?.USER_ID;
  const APP_PLATFORM = req?.body?.APP_PLATFORM ?? req?.query?.APP_PLATFORM;
  const YM = req?.body?.YM ?? req?.query?.YM;

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
    ORDER BY START_DATE, DAYS_ID;
  `,
    [USER_ID, APP_PLATFORM, YM, YM]
  );

  if (error) return res.send(fail());

  res.send(success(result));
};

// 시작일 저장
export const postDays = async (req: Request, res: Response) => {
  const USER_ID = req?.body?.USER_ID;
  const APP_PLATFORM = req?.body?.APP_PLATFORM;
  const START_DATE = req?.body?.START_DATE;

  if (!USER_ID || !APP_PLATFORM || !START_DATE) {
    return res.send(fail("!USER_ID || !APP_PLATFORM || !START_DATE"));
  }

  let { error } = await useDatabase(
    `
    INSERT INTO tb_days (
      USER_ID, APP_PLATFORM, START_DATE
    ) VALUES (
      ?, ?, ?
    );
  `,
    [USER_ID, APP_PLATFORM, START_DATE]
  );

  if (error) return res.send(fail());

  res.send(success());
};

// 종료일 저장 (수정)
export const putDays = async (req: Request, res: Response) => {
  const USER_ID = req?.body?.USER_ID;
  const APP_PLATFORM = req?.body?.APP_PLATFORM;
  const DAYS_ID = req?.body?.DAYS_ID;
  const END_DATE = req?.body?.END_DATE;

  if (!USER_ID || !APP_PLATFORM || !DAYS_ID) {
    return res.send(fail("!USER_ID || !APP_PLATFORM || !DAYS_ID"));
  }

  let { error } = await useDatabase(
    `
    UPDATE tb_days SET
    END_DATE = ?
    WHERE USER_ID = ?
    AND APP_PLATFORM = ?
    AND DAYS_ID = ?;
  `,
    [END_DATE, USER_ID, APP_PLATFORM, DAYS_ID]
  );

  if (error) return res.send(fail());

  res.send(success());
};

// 저장된 날짜 삭제
export const deleteDays = async (req: Request, res: Response) => {
  const USER_ID = req?.body?.USER_ID ?? req?.query?.USER_ID;
  const APP_PLATFORM = req?.body?.APP_PLATFORM ?? req?.query?.APP_PLATFORM;
  const DAYS_ID = req?.body?.DAYS_ID ?? req?.query?.DAYS_ID;

  if (!USER_ID || !APP_PLATFORM || !DAYS_ID) {
    return res.send(fail("!USER_ID || !APP_PLATFORM || !DAYS_ID"));
  }

  let { error } = await useDatabase(
    `
    DELETE FROM tb_days
    WHERE USER_ID = ?
    AND APP_PLATFORM = ?
    AND DAYS_ID = ?;
  `,
    [USER_ID, APP_PLATFORM, DAYS_ID]
  );

  if (error) return res.send(fail());

  res.send(success());
};
