import React from "react";
import Header from "../components/Header";
import ModalComponent from "../components/SelectOptionModal";

function Test() {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  React.useEffect(() => {
    console.log("asdf????");
  }, []);
  return (
    <>
      {/* <button
        onClick={() => {
          console.log("????");
          setIsOpen((prev) => !prev);
        }}>
        asdfafsdafds
      </button>
      <ModalComponent open={isOpen} onClose={() => setIsOpen(false)}>
        {<div>fsdafafsdasdfasfdasfdasfd</div>}
      </ModalComponent> */}
    </>
  );
}

export default Test;
