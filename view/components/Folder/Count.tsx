/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { useMemo } from "react";
import styled from "styled-components";
import type { Icon } from "../../../types";

type Props = { list: Icon[] };
export default ({ list }: Props): JSX.Element => {
  type CountType = { folder: number; file: number; url: number };
  const count = useMemo<CountType>(() => {
    let [folder, file, url] = [0, 0, 0];
    list?.forEach((x) => {
      if (x?.ICON_TYPE === 1) folder += 1;
      if (x?.ICON_TYPE === 2) file += 1;
      if (x?.ICON_TYPE === 3) url += 1;
    });
    return { folder, file, url };
  }, [list]);

  return (
    <Container>
      <Count>폴더 수: {count?.folder ?? 0}개</Count>
      <Count>파일 수: {count?.file ?? 0}개</Count>
      <Count>링크 수: {count?.url ?? 0}개</Count>
    </Container>
  );
};

const Container = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Count = styled.span`
  margin-left: 20px;
`;
