import React, { DispatchWithoutAction } from 'react';

export default function useToggle(
  initialValue: boolean | (() => boolean),
): [
    boolean,
    DispatchWithoutAction,
    DispatchWithoutAction,
    DispatchWithoutAction
  ] {
  const [isOpen, setIsOpen] = React.useState<boolean>(initialValue);

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return [isOpen, open, close, toggle];
}
