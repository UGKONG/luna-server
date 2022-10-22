/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Count from "./Count";
import type { Icon } from "../../../types";
import type { StoreState } from "../../../hooks/useStore";

type Props = { list: Icon[] };
export default ({ list }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const path = useSelector((x: StoreState) => x?.path);
  const lastIdx = useMemo(() => path?.length - 1, [path]);

  const pathItemClick = (id: number): void => {
    const findIdx: number = path?.findIndex((x) => x?.id === id);
    dispatch({ type: "path", payload: path?.slice(0, findIdx + 1) });
  };

  return (
    <Container>
      <Path>
        {path?.map((item, i) => (
          <span key={i}>
            <PathLink onClick={() => pathItemClick(item?.id)}>
              {item?.name}
            </PathLink>
            {i !== lastIdx && <RightIcon>&gt;</RightIcon>}
          </span>
        ))}
      </Path>
      <Count list={list} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff77;
  border-bottom: 1px solid #eeeeeecc;
  font-size: 0.8rem;
  padding: 0 8px;
  color: #555555;
`;
const Path = styled.p`
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PathLink = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const RightIcon = styled.small`
  margin: 0 3px 0 4px;
`;
