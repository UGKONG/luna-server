import fs from "fs";

const appStart = (): void => {
  const protocol: string = "http";
  const host: string = "localhost";
  const port: number = Number(process.env.SERVER_PORT ?? 8080);

  const result = `${protocol}://${host}:${port}`;
  console.log(result);

  // 파일 저장 경로 유무 확인 & 없으면 디렉토리 생성
  const uploadPath = __dirname + "/../upload/";
  !fs.existsSync(uploadPath) && fs.mkdirSync(uploadPath);
};

export default appStart;
