import ReactPortal from "../ReactPortal";

import useAnimationEnd from "../../hooks/useAnimationEnd";
import { Container, Header, Overlay } from "./styles";
import { IModal } from "../../types/Modal";

export default function Modal({
  visible,
  children,
  title,
  hasScroll = false,
  onClose,
}: IModal) {
  const { shouldRender, animatedElementRef } = useAnimationEnd(visible);
  if (!shouldRender) {
    return null;
  }
  return (
    <ReactPortal containerId="modal-root">
      <Overlay isLeaving={!visible} ref={animatedElementRef}>
        <Container isLeaving={!visible} hasScroll={hasScroll}>
          <Header>
            <h3 translate="no">{title}</h3>
            {onClose && <button onClick={onClose}>X</button>}
          </Header>
          {children}
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
