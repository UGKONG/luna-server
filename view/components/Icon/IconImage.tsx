/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { useMemo } from "react";
import styled from "styled-components";
import {
  FcQuestions,
  FcFile,
  FcImageFile,
  FcVideoFile,
  FcAudioFile,
  FcFolder,
  FcLink,
  FcUpload,
  FcDownload,
} from "react-icons/fc";
import type { Icon } from "../../../types";

type Props = { data: Icon };
export default ({ data }: Props) => {
  const icon = useMemo<JSX.Element>(() => {
    if (data?.ICON_TYPE === 1) return <FcFolder />;
    if (data?.ICON_TYPE === 2) return <FcFile />;
    if (data?.ICON_TYPE === 3) return <FcLink />;

    return <FcQuestions />;
  }, []);

  return <Container>{icon}</Container>;
};

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
`;
