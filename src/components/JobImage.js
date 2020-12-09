import styled from 'styled-components';

const RoundedWrapper = styled.div`
  border-radius: 50%;
  height: 88px;
  overflow: hidden;
  width: 88px;

  @media (max-width: 499px) {
    height: 48px;
    position: absolute;
    top: -24px;
    width: 48px;
  }
`;

const JobImage = ({ image, company }) => {
  return (
    <RoundedWrapper>
      <img src={image} alt={company} />
    </RoundedWrapper>
  );
};

export default JobImage;
