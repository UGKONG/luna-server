type not = null | undefined;
type s = string;
type n = number;
type b = boolean;
type v = void;
type sn = s | number;
type P<T = v> = Promise<T>;

export type OrNull<T> = T | null;

export interface User {
  id: n;
  name: s;
}

export interface Version {
  version: s;
  now: s;
  developer: s;
}

interface UploadFileHeaders {
  "content-disposition": s;
  "content-type": s;
}
export interface UploadFile {
  fieldName: s;
  headers: UploadFileHeaders;
  name: s;
  originalFilename: s;
  path: s;
  size: n;
  type: s;
}

// 경로 { 아이디, 이름 }
export type Path = { id: n; name: s };

// 1 - 폴더, 2 - 파일, 3 - 링크
export type IconType = 1 | 2 | 3;

// 아이콘 Model
export interface Icon {
  ICON_ID: n;
  ICON_PARENT_ID: n;
  ICON_TYPE: IconType;
  ICON_TYPE_NAME: s;
  ICON_NAME: s;
  CREATE_DATE: s;
  UPDATE_DATE: s;
}
