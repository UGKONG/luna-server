type not = null | undefined;
type s = string;
type n = number;
type b = boolean;
type v = void;
type sn = string | number;
type P<T> = Promise<T>;

export type OrNull<T> = T | null;

export interface User {
  id: number;
  name: string;
}

export interface Version {
  version: string;
  now: string;
  developer: string;
}

interface UploadFileHeaders {
  "content-disposition": string;
  "content-type": string;
}
export interface UploadFile {
  fieldName: string;
  headers: UploadFileHeaders;
  name: string;
  originalFilename: string;
  path: string;
  size: number;
  type: string;
}

// 1 - 폴더, 2 - 파일, 3 - 링크
export type IconType = 1 | 2 | 3;

// 경로 { 아이디, 이름 }
export type Path = { id: number; name: string };

// 아이콘 Model
export interface Icon {
  ICON_ID: number;
  ICON_PARENT_ID: number;
  ICON_TYPE: IconType;
  ICON_TYPE_NAME: string;
  ICON_NAME: string;
  CREATE_DATE: string;
  UPDATE_DATE: string;
}
