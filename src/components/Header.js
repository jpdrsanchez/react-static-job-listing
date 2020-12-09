import { memo } from 'react';
import styled from 'styled-components';
import headerDesktop from '../images/bg-header-desktop.svg';
import headerMobile from '../images/bg-header-mobile.svg';

const StyledHeader = styled.header`
  background-color: var(--dark-cyan);
  background-image: url(${headerMobile});
  height: 156px;

  @media (min-width: 500px) {
    background-image: url(${headerDesktop});
  }
`;

const Header = () => {
  return <StyledHeader></StyledHeader>;
};

export default memo(Header);
