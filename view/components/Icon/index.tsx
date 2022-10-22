/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import IconImage from "./IconImage";
import type { Icon } from "../../../types";
import type { StoreState } from "../../../hooks/useStore";

type Props = { data: Icon };
export default ({ data }: Props) => {
  const dispatch = useDispatch();
  const path = useSelector((x: StoreState) => x?.path);
  const clickIconList = useSelector((x: StoreState) => x?.clickIconList);

  const click = () => {
    let find: number = clickIconList?.indexOf(data?.ICON_ID);
    let array: number[] = [];

    if (find === -1) {
      array = [...clickIconList];
      array.push(data?.ICON_ID);
    } else {
      array = clickIconList?.filter((x) => x !== data?.ICON_ID);
    }
    dispatch({ type: "clickIconList", payload: array });
  };

  const dbClick = () => {
    switch (data?.ICON_TYPE) {
      // 폴더
      case 1:
        let copy = [...path];
        copy.push({ id: data?.ICON_ID, name: data?.ICON_NAME });
        dispatch({ type: "path", payload: copy });
        break;

      // 파일
      case 2:
        console.log("파일");
        break;

      // 링크
      case 3:
        console.log("링크");
        break;
    }
  };

  type ClassName = "active" | "";
  const className = useMemo<ClassName>(() => {
    let find: number = clickIconList?.indexOf(data?.ICON_ID);
    return find > -1 ? "active" : "";
  }, [clickIconList]);

  return (
    <Container className={className} onClick={click} onDoubleClick={dbClick}>
      <IconImage data={data} />
      <Name>
        <NameText>{data?.ICON_NAME}</NameText>
      </Name>
    </Container>
  );
};

const Container = styled.section`
  padding: 6px;
  margin: 5px;
  width: 100px;
  height: 120px;
  border: 1px solid #ffffff00;
  display: flex;
  flex-direction: column;
  user-select: none;
  &:hover {
    border: 1px solid #ffffff60;
    background-color: #bbbbbb20;
    & > p {
      color: #000;
    }
  }
  &.active {
    border: 1px solid #ffffff80;
    background-color: #99999920;
    & > p {
      color: #000;
    }
  }
`;
const Name = styled.p`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  margin-top: 6px;
  color: #555555;
  white-space: nowrap;
`;
const NameText = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
`;
