declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.json";

declare type not = null | undefined;
declare type s = string;
declare type n = number;
declare type b = boolean;
declare type v = void;
declare type sn = s | number;
declare type P<T = v> = Promise<T>;
declare type OrNull<T> = T | null;

declare namespace My {
  declare type Request = express.Request;
  declare type Response = express.Response;
}

declare interface User {
  id: n;
  name: s;
}
declare interface Version {
  version: s;
  now: s;
  developer: s;
}

declare type Path = { id: n; name: s };

declare type IconType = 1 | 2 | 3;

declare interface Icon {
  ICON_ID: n;
  ICON_PARENT_ID: n;
  ICON_TYPE: IconType;
  ICON_TYPE_NAME: s;
  ICON_NAME: s;
  CREATE_DATE: s;
  UPDATE_DATE: s;
}
