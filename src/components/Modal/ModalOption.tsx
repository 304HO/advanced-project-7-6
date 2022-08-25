import { Button, Modal, Input } from "antd";
import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

type ModalOptionTypes = {
  title?: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const StyledModal = styled(Modal)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  & .ant-modal-footer {
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: row;
  }

  & .ant-modal-footer > button {
    border: none;
  }
`;

const StyledButton = styled(Button)`
  width: 260px;
  height: 52px;
`;

const ModalOption = ({ open, title, children, onClose }: ModalOptionTypes) => {
  return (
    <StyledModal
      visible={open}
      title={title}
      onOk={onClose}
      onCancel={onClose}
      footer={[
        <StyledButton key="primary" block={true} onClick={onClose}>
          취소
        </StyledButton>,
        <StyledButton key="back" type="primary" block={true} onClick={onClose}>
          완료
        </StyledButton>
      ]}>
      {children}
    </StyledModal>
  );
};

export default ModalOption;
