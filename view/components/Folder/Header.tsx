/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

import React, { useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { FiUpload, FiDownload } from "react-icons/fi";
import type { StoreState } from "../../../hooks/useStore";

type Props = {
  postIcon: (props: { iconType: number; file: File }) => P;
};
export default ({ postIcon }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const path = useSelector((x: StoreState) => x?.path);

  // 뒤로가기 버튼 클릭 가능한지
  const isBackBtnEnable = useMemo<boolean>(() => {
    return path?.length > 2;
  }, [path]);

  // 탐색기 제목
  const title = useMemo<string>(() => {
    return path[path?.length - 1]?.name;
  }, [path]);

  // 탐색기 종료
  const windowClose = (): void => {
    dispatch({ type: "path", payload: [{ id: 0, name: "홈" }] });
  };

  // 뒤로가기 버튼 클릭
  const backBtnClick = (): void => {
    if (!isBackBtnEnable) return;
    const lastPathId = path[path?.length - 1]?.id;
    const findIdx: number = path?.findIndex((x) => x?.id === lastPathId);
    dispatch({ type: "path", payload: path?.slice(0, findIdx) });
  };

  // 파일 변경 시 (업로드)
  const uploadFileChange = async (e: any): Promise<void> => {
    const file: File | undefined = e?.target?.files[0];
    if (file) postIcon({ iconType: 2, file: file });
  };

  return (
    <Container>
      <OptionContainer>
        <BackBtn disabled={!isBackBtnEnable} onClick={backBtnClick}>
          <BackIcon />
        </BackBtn>
        <Title>{title}</Title>
      </OptionContainer>
      <ButtonContainer>
        <Upload onChange={uploadFileChange} />
        <UploadBtn>
          <UploadIcon />
        </UploadBtn>
        <DownloadBtn>
          <DownloadIcon />
        </DownloadBtn>
        <CloseBtn onClick={windowClose}>탐색기 종료</CloseBtn>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  height: 50px;
  background-color: #ffffff77;
  border-bottom: 1px solid #eeeeeecc;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #585858;
  padding-top: 1px;
`;
const HeaderBtnStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border: 1px solid #bbb;
  background-color: #efefef;
  color: #555;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e2e2e2;
    color: #222;
  }
  &:disabled {
    background-color: #efefef;
    color: #999;
    cursor: default;
  }
`;
const HeaderBtn = styled.button`
  ${HeaderBtnStyle}
`;
const BackBtn = styled(HeaderBtn)`
  width: 30px;
  margin: 0 10px 0 0;
`;
const CloseBtn = styled.button`
  height: 30px;
  padding: 2px 14px 0;
  border: none;
  background-color: #e38383;
  color: #fff;
  font-size: 13px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #df7676;
  }
`;
const DownloadBtn = styled(HeaderBtn)`
  width: 30px;
`;
const Upload = styled.input.attrs(() => ({
  id: "fileUpload",
  type: "file",
}))`
  display: none;
`;
const UploadBtn = styled.label.attrs(() => ({
  htmlFor: "fileUpload",
}))`
  ${HeaderBtnStyle}
  width: 30px;
`;

const BackIcon = styled(BiArrowBack)``;
const UploadIcon = styled(FiUpload)``;
const DownloadIcon = styled(FiDownload)``;
