import { ReactNode } from "react";
import styled from "styled-components";

const SWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IWrapper {
  children: ReactNode;
}

function Wrapper({ children }: IWrapper) {
  return <SWrapper>{children}</SWrapper>;
}

export default Wrapper;
