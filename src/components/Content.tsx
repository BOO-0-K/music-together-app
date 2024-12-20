import { ReactNode } from "react";
import styled from "styled-components";

const SContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

interface IContent {
  children: ReactNode;
}

function Content({ children }: IContent) {
  return <SContent>{children}</SContent>;
}

export default Content;
