import { memo } from 'react';
import styled from 'styled-components';
import Container from './Container';

const StyledP = styled.p`
  color: var(--very-dark-grayish-cyan);
  font-size: 0.875rem;
  font-weight: 700;
  padding-bottom: 0.625rem;
  padding-top: 0.625rem;
  text-align: center;

  a {
    color: var(--dark-cyan);
    transition: all 0.3s ease-out;

    &:hover {
      color: var(--very-dark-grayish-cyan);
    }
  }

  span {
    color: #e63946;
  }
`;

const Footer = () => {
  return (
    <footer>
      <Container>
        <StyledP>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded whit <span>❤</span> by{' '}
          <a href="https://github.com/jpdrsanchez">João Pedro</a>.
        </StyledP>
      </Container>
    </footer>
  );
};

export default memo(Footer);
