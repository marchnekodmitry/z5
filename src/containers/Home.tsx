import React from 'react';
import styled from 'styled-components';

import useToggle from '@/utils/hooks/useToggle';

import Modal from '@/components/common/Modal';
import IncomingCall from '@/components/call/IncomingCall';
import Call from '@/components/call/Call';

interface Props {}

const Home: React.FC<Props> = () => {
  const [isIncomingCall, openIncomingCallModal, closeIncomingCallModal] = useToggle(false);
  const [isCall, openCallModal, closeCallModal] = useToggle(true);

  const acceptCallHandler = React.useCallback(() => {
    closeIncomingCallModal();
    openCallModal();
  }, []);

  return (
    <HomeStyled>
      <button onClick={openIncomingCallModal} type="button">adsasdas</button>
      <Modal isOpen={isIncomingCall} onRequestClose={closeIncomingCallModal}>
        <IncomingCall onAccept={acceptCallHandler} onReject={closeIncomingCallModal} />
      </Modal>
      <Modal isOpen={isCall} onRequestClose={closeCallModal} style={{ overlay: { padding: '60px 0' } }}>
        <Call />
      </Modal>
    </HomeStyled>
  );
};

const HomeStyled = styled.div``;

export default Home;
