import styled, { keyframes } from 'styled-components';

const animationWrapper = keyframes`
  0%, 80%, 100% { transform: scale(0) }
  40% { transform: scale(1.0) }
`;

const LoadingWrapper = styled.div`
  margin: 100px auto 0;
  padding-bottom: 3.4375rem;
  padding-top: 3.4375rem;
  text-align: center;
  width: 70px;
`;

const Dot = styled.div`
  animation: ${animationWrapper} 1.4s infinite ease-in-out both;
  background-color: var(--very-dark-grayish-cyan);
  border-radius: 100%;
  display: inline-block;
  height: 18px;
  width: 18px;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Dot></Dot>
      <Dot></Dot>
      <Dot></Dot>
    </LoadingWrapper>
  );
};

export default Loading;
