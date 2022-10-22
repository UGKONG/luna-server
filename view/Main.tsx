/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import IconComponent from "./components/Icon/index";
import Folder from "./components/Folder/index";
import useAxios from "../hooks/useAxios";
import type { AxiosResponse } from "../hooks/useApiResponse";
import type { StoreState } from "../hooks/useStore";
import type { Icon, Path } from "../types";
import bg from "../assets/images/background.jpeg";

export default function Main(): JSX.Element {
  const dispatch = useDispatch();
  const path = useSelector((x: StoreState) => x?.path);
  const [iconList, setIconList] = useState<Icon[]>([]);

  // 활성화 페이지 ID
  const activeParent = useMemo<Path>(() => {
    return path[path?.length - 1] ?? { id: 0, name: "홈" };
  }, [path]);

  // 아이콘 리스트 가져오기
  const getDesktopIcon = async (): Promise<void> => {
    const uri = "/icon?parentId=" + path[0]?.id;
    const { data }: AxiosResponse = await useAxios.get(uri);
    setIconList(data?.current);
  };

  // 클릭된 아이콘 리스트 초기화
  const clickIconListReset = (): void => {
    dispatch({ type: "clickIconList", payload: [] });
  };

  // 배경 클릭 (클릭된 아이콘 리스트 초기화)
  const bgClick = (e: any): void => {
    const className: string = e?.target?.className?.toString();
    if (className?.indexOf("bg") > -1) clickIconListReset();
  };

  useEffect((): void => {
    clickIconListReset();
    getDesktopIcon();
  }, [path]);

  return (
    <Container bg={bg}>
      {/* 클릭영역 */}
      <Contents className="bg" onClick={bgClick}>
        {/* 아이콘 리스트 */}
        {iconList?.map((item) => (
          <IconComponent key={item?.ICON_ID} data={item} />
        ))}

        <Folder Contents={Contents} activeParent={activeParent} />
      </Contents>
    </Container>
  );
}

type ContainerProps = { bg: string };
const Container = styled.main<ContainerProps>`
  background-image: url(${(x) => x?.bg});
  object-fit: cover;
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Contents = styled.section`
  flex: 1;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px;
  backdrop-filter: blur(3px) grayscale(0.3);
`;
