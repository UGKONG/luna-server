/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect, useMemo, useState } from "react";
import styled, { StyledComponent } from "styled-components";
import type { AxiosProgressEvent } from "axios";
import type { Icon, Path } from "../../../types";
import IconComponent from "../Icon";
import Header from "./Header";
import Footer from "./Footer";
import useAxios from "../../../hooks/useAxios";
import type { AxiosResponse } from "../../../hooks/useApiResponse";
import usePercent from "../../../hooks/usePercent";

type Props = {
  activeParent: Path;
  Contents: StyledComponent<"section", any, {}, never>;
};
export default ({ activeParent, Contents }: Props) => {
  const [iconList, setIconList] = useState<Icon[]>([]);

  // 폴더 내부 아이콘 리스트 조회
  const getIconList = async (): P => {
    setIconList([]);
    const uri = "/icon?parentId=" + activeParent?.id;
    const { data }: AxiosResponse = await useAxios.get(uri);
    setIconList(data?.current);
  };

  // 폴더 내부 아이콘 업로드
  type PostIconProps = { iconType: number; file: File };
  const postIcon = async ({ iconType, file }: PostIconProps): P => {
    const { name, size, type, lastModified: timestamp } = file;

    let form = new FormData();
    form.append("parentId", String(activeParent?.id));
    form.append("iconType", String(iconType));
    form.append("file", file);

    try {
      const { data }: AxiosResponse = await useAxios.post("/icon", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: ({ loaded, total }: AxiosProgressEvent) => {
          const percent = usePercent(loaded, total);
          console.log(percent + "%");
          if (percent === 100) console.log("Upload Success");
        },
      });

      if (!data?.result) return alert("업로드에 실패하였습니다.");
      getIconList();
    } catch {
      return alert("업로드에 실패하였습니다.");
    }
  };

  type StrNum = string | number;
  type ContainerSize = { width: StrNum; height: StrNum };
  const containerSize = useMemo<ContainerSize>(() => {
    if (!activeParent?.id) return { width: 0, height: 0 };
    return { width: "100%", height: "100%" };
  }, [activeParent]);

  useEffect((): void => {
    getIconList();
  }, [activeParent?.id]);

  return (
    <Container style={containerSize}>
      <Header postIcon={postIcon} />
      <Contents style={{ backdropFilter: "unset" }}>
        {iconList?.map((item) => (
          <IconComponent key={item?.ICON_ID} data={item} />
        ))}
      </Contents>
      <Footer list={iconList} />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffffaa;
  transition: 0.3s;
  overflow: hidden;
  flex-direction: column;
`;
