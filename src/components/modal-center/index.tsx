import { CSSTransition } from "react-transition-group";

import styles from "./modal-center.module.scss";

interface IModalCenterProps {
  in: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalCenter = (props: IModalCenterProps) => {
  return (
    <CSSTransition
      in={props.in}
      timeout={250}
      unmountOnExit
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
    >
      <div className={styles.modalCenter} onMouseDown={props.onClose}>
        <div className={styles.modal} onMouseDown={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalCenter;
