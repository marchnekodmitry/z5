import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
}

const ButtonImage: React.FC<Props> = ({
  src, alt, onClick, className,
}) => (
  <StyledButton onClick={onClick} className={className}>
    <img src={src} alt={alt} />
  </StyledButton>
);

const StyledButton = styled.button`
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

export default ButtonImage;
