import React from 'react';
import styled from 'styled-components';
import ReactModal, { Props as ReactModalProps, Styles } from 'react-modal';

const defaultStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    padding: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.21)',
    overflow: 'auto',
  },
  content: {
    position: 'static',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    flexShrink: '0',
    border: 'none',
    borderRadius: '0',
    background: 'transparent',
    outline: 'none',
    padding: '0',
    margin: 'auto',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
};

const Modal: React.FC<ReactModalProps> = ({ children, style: propsStyle, ...rest }) => {
  const style = React.useMemo(() => ({
    overlay: {
      ...defaultStyle.overlay,
      ...propsStyle?.overlay || {},
    },
    content: {
      ...defaultStyle.content,
      ...propsStyle?.content || {},
    },
  }), []);

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <ReactModal style={style as Styles} {...rest}>
      {children}
    </ReactModal>
  );
};

export default Modal;
