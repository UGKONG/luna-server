export interface SuccessResponseData {
  result: boolean;
  current: any;
  message: "success";
}
export interface FailResponseData {
  result: boolean;
  current: null;
  message: string;
}
export interface AxiosResponse {
  data: SuccessResponseData | FailResponseData;
}

/**
 * @example
 * fail('에러입니다.');
 * @return
 * result: false,
 * message: "에러입니다."
 * current: null
 */
export const fail = (message: string = "Error"): FailResponseData => {
  return {
    result: false,
    message: message,
    current: null,
  };
};

/**
 * @example
 * success('성공입니다.');
 * @return
 * result: true
 * message: "success"
 * current: "성공입니다."
 */
export const success = (data: any = {}): SuccessResponseData => {
  return {
    result: true,
    message: "success",
    current: data,
  };
};

export default { success, fail };
