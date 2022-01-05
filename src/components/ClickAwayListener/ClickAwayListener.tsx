import {
  useRef,
  useEffect,
  useCallback,
  cloneElement,
  ReactElement,
} from 'react';
import useForkRef from 'components/utils/useForkRef';

interface ClickAwayListenerProps {
  onClickAway: () => void;
  mouseEvent?: 'click' | 'mouseup' | 'mousedown';
  children: ReactElement;
}

type ChildrenProps = { ref: React.Ref<Element | null> } & Pick<
  React.DOMAttributes<Element>,
  'onClick' | 'onMouseDown' | 'onMouseUp'
>;

export default function ClickAwayListener(props: ClickAwayListenerProps) {
  const { onClickAway, mouseEvent = 'click', children } = props;

  const nodeRef = useRef<Element>(null);

  const handleRef = useForkRef(
    // @ts-expect-error: undefined ref on children
    children.ref,
    nodeRef
  );

  const childrenProps: ChildrenProps = { ref: handleRef };

  const handleClickAway = useCallback((e: MouseEvent) => {
    if (!nodeRef.current || nodeRef.current.contains(e.target as Node)) {
      return;
    }
    onClickAway();
  }, []);

  useEffect(() => {
    document.addEventListener(mouseEvent, handleClickAway);
    return () => document.removeEventListener(mouseEvent, handleClickAway);
  }, []);

  return cloneElement(children, childrenProps);
}
