declare type not = null | undefined;
declare type a = any;
declare type s = string;
declare type n = number;
declare type b = boolean;
declare type v = void;
declare type sn = s | number;
declare type P<T = v> = Promise<T>;
declare type OrNull<T> = T | null;

export type SnsPlatform = "KAKAO" | "NAVER";
export type AppPlatform = "LUNA" | "PROSTA" | "VENA";

// User Interface
export interface User {
  USER_ID: OrNull<n>;
  AUTH_ID: OrNull<s>;
  USER_NAME: OrNull<s>;
  SNS_PLATFORM: OrNull<SnsPlatform>;
  APP_PLATFORM: OrNull<AppPlatform>;
  CREATE_DATE: OrNull<s>;
}

// Use Interface
export interface Use extends Pick<User, "USER_ID" | "APP_PLATFORM"> {
  USE_ID: OrNull<n>;
  DEVICE_ID: OrNull<s>;
  DEVICE_NAME: OrNull<s>;
  USE_MODE: OrNull<n>;
  USE_POWER: OrNull<n>;
  USE_TIMER: OrNull<n>;
  USE_BATTERY: OrNull<n>;
  USE_DATE: OrNull<s>;
}

export interface Days extends Pick<User, "USER_ID" | "APP_PLATFORM"> {
  DAYS_ID?: OrNull<n>;
  START_DATE: OrNull<s>;
  END_DATE: OrNull<s>;
  CREATE_DATE: OrNull<s>;
}

// Version Interface
export interface Version {
  version: OrNull<s>;
  now: OrNull<s>;
  developer: OrNull<s>;
}
