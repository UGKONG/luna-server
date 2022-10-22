import type { Request, Response } from "express";
import { fail, success } from "../hooks/useApiResponse";
import useDatabase from "../hooks/useDatabase";
import fs from "fs";

interface UploadFileHeaders {
  "content-disposition": string;
  "content-type": string;
}
interface UploadFile {
  fieldName: string;
  headers: UploadFileHeaders;
  name: string;
  originalFilename: string;
  path: string;
  size: number;
  type: string;
}

// 아이콘 리스트 조회
export const getIcon = async (req: Request, res: Response) => {
  const id = req?.query?.id;
  const parentId = req?.query?.parentId;

  if (!id && !parentId) {
    return res.send(fail("id와 parentId 모두 없습니다."));
  }

  const query = `
    SELECT
    a.*, b.TEXT AS ICON_TYPE_NAME
    FROM icon a 
    LEFT JOIN common b ON b.CODE = a.ICON_TYPE AND b.CURRENT_ID = 1
    WHERE
    ${id ? "a.ICON_ID" : "a.ICON_PARENT_ID"} =
    ${id ?? parentId};
  `;

  const { error, result } = await useDatabase(query);

  if (error) return res.send(fail());

  res.send(success(id ? result[0] : result));
};

// 아이콘 추가
export const postIcon = async (req: Request, res: Response) => {
  const parentId = req?.query?.parentId ?? req?.body?.parentId;
  const iconType = req?.query?.iconType ?? req?.body?.iconType;
  const file = (req?.files as any)?.file as UploadFile;

  if (!parentId || (Number(iconType) === 2 && !file)) return res.send(fail());

  const { error, result } = await useDatabase(
    `
    INSERT INTO icon (
      ICON_PARENT_ID, ICON_TYPE, ICON_NAME
    ) VALUES (
      ?, ?, ?
    );
    `,
    [parentId, iconType, file?.name]
  );

  if (error) return res.send(fail());

  fs.renameSync(file?.path, __dirname + "/../upload/" + file?.name);
  res.send(success(file));
};
