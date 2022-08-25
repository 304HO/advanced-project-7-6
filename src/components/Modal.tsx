import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

type ModalPropsType = {
  open: boolean;
  children: JSX.Element;
  onClose: () => void;
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Modala = styled.div`
  position: fixed;
  top: 25%;
  left: 35%;
  z-index: 1000;
`;

export default function Modal({ open, children, onClose }: ModalPropsType) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <Modala onClick={onClose}>{children}</Modala>
    </>,
    document.getElementById("portal") as HTMLElement
  );
}
