import styled from "styled-components";
import Button from "./Button";
import { useModal } from "../hooks/useModal";
import { AnimatePresence, motion } from "framer-motion";

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

const Modal = styled(motion.div)`
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

const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  leaving: {
    opacity: 0,
  },
};

function AlertModal() {
  const { modal } = useModal();

  return (
    <AnimatePresence>
      {modal.isOpen && modal.type === "alert" ? (
        <Wrapper>
          <Modal
            variants={modalVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          >
            <Title>{modal?.title}</Title>
            <Button
              text={"확인"}
              colorType={"POSITIVE"}
              onClick={modal.callBack}
            />
          </Modal>
        </Wrapper>
      ) : null}
    </AnimatePresence>
  );
}

export default AlertModal;
