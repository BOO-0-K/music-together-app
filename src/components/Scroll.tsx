import { ReactNode } from "react";
import styled from "styled-components";

const SScroll = styled.div`
  height: 100%;
  overflow-y: auto;
`;

interface IScroll {
  children: ReactNode;
}

function Scroll({ children }: IScroll) {
  return <SScroll>{children}</SScroll>;
}

export default Scroll;
