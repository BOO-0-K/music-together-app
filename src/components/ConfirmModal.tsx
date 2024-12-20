import styled from "styled-components";
import Button from "./Button";
import { useModal } from "../hooks/useModal";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.inputColor};
  border-radius: 5px;
  padding: 40px 80px;
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

function ConfirmModal() {
  const { modal } = useModal();

  if (!modal.isOpen || modal.type !== "confirm") {
    return null;
  }

  return (
    <Wrapper>
      <Modal>
        <Title>{modal?.title}</Title>
        <Button text={"확인"} colorType={"POSITIVE"} onClick={modal.callBack} />
      </Modal>
    </Wrapper>
  );
}

export default ConfirmModal;
