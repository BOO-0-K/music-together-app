import styled from "styled-components";

const SInput = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.inputColor};
  font-size: 20px;
  font-family: "Nanum Gothic", serif;
`;

interface IInput {
  type: string;
  placeholder: string;
}

function Input({ type, placeholder }: IInput) {
  return <SInput type={type} placeholder={placeholder} />;
}

export default Input;
