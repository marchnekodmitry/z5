import React from 'react';
import styled from 'styled-components';

import palette from '@/utils/styles/palette';

import ButtonImage from '@/components/common/ButtonImage';

interface Props {
  onAccept: () => void;
  onReject: () => void;
}

const IncomingCall: React.FC<Props> = ({ onAccept, onReject }) => (
  <IncomingCallWrapper>
    <IncomingCallText>
      INCOMING CALL FROM “POST HOUSTON” EXIT #4
    </IncomingCallText>
    <StyledButtonImage src="/assets/accept-call.png" alt="accept call" onClick={onAccept} />
    <StyledButtonImage src="/assets/drop-call.png" alt="drop call" onClick={onReject} />
  </IncomingCallWrapper>
);

const IncomingCallWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 1440px;
    padding: 64px;
    background-color: ${palette.white};
`;

const IncomingCallText = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
`;

const StyledButtonImage = styled(ButtonImage)`
    &:first-of-type {
        margin-left: auto;
    }

    &:last-of-type {
        margin-left: 90px;
    }
`;

export default IncomingCall;
