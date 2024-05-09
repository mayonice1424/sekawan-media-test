import { useState } from "react";
import { ReactNode } from "react";
export interface ModalProps {
  isVisibleSmall: boolean;
    setIsVisibleSmall: React.Dispatch<React.SetStateAction<boolean>>;
    onCloseSmall: () => void;
    children?: ReactNode;
}

const GetDataModalSmall = () => {
  const [visible, setVisible] = useState(false);
  const modal: ModalProps = {
    isVisibleSmall: visible,
    setIsVisibleSmall: setVisible,
    onCloseSmall: () => setVisible(false),
  };
  return {
    modal,
    visible,
    setVisible
  }
  } 
  export default GetDataModalSmall;