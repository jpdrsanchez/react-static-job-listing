import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
`;

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
