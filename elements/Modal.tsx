import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { SFC } from "../types";

type Modal = {
  open: boolean;
  handleClose?: Function;
};

const Body: SFC<Modal> = ({ className, children, open, handleClose }) => {
  const [show, setShow] = useState(open || false);

  const handleClick = () => {
    setShow(false);
    if (handleClose) handleClose();
  };

  useEffect(() => {
    setShow(open);
  }, [open]);

  if (!show) return null;

  return (
    <div className={className}>
      <IoCloseSharp className="close" size="2.5rem" onClick={handleClick} />
      {children}
    </div>
  );
};

export const Modal = styled(Body)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.5s;
  overflow: hidden;
  .close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.5rem;
    cursor: pointer;
  }
`;
