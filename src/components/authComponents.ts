import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Error = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.negativeColor};
`;

export const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: ${(props) => props.theme.accentColor};
  }
`;
