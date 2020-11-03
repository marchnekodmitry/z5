import React from 'react';
import styled from 'styled-components';

import palette from '@/utils/styles/palette';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ children, onClick, className }) => (
  <StyledButton onClick={onClick} className={className}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
    padding: 10px 12px;
    background-color: ${palette.green};
    color: ${palette.white};
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: ${palette.green_dark};
    }
`;

export default Button;
