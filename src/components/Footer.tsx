import styled from "styled-components";

const SFooter = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e2e2e2;
  width: 100%;
  justify-content: center;
`;

const CopyRightText = styled.span`
  color: white;
`;

function Footer() {
  return (
    <SFooter>
      <CopyRightText>©palette.black</CopyRightText>
    </SFooter>
  );
}

export default Footer;
