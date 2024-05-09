
import { useState } from "react";
export interface ModalProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onClose: () => void;
}

const GetDataModal = () => {
  const [visible, setVisible] = useState(false);
  const modal: ModalProps = {
    isVisible: visible,
    setIsVisible: setVisible,
    onClose: () => setVisible(false),
  };

  const [showMenu, setShowMenu] = useState(false);

  const iconVariants = {
    open: {
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    closed: {
      rotate: 180,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return {
    iconVariants,
    toggleMenu,
    showMenu,
    setShowMenu,
    modal,
    visible,
    setVisible,
  }
}
export default GetDataModal;


