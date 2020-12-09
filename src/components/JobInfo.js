import styled from 'styled-components';

const InfoWrapper = styled.div`
  @media (max-width: 499px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1.125rem;
    padding-bottom: 1.5rem;
  }
`;

const CompanyWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;

  h3 {
    color: var(--dark-cyan);
    font-size: 0.75rem;
    font-weight: 700;
    margin-right: 1.125rem;
  }
`;

const StyledSpan = styled.span`
  border-radius: 1rem;
  color: #fff;
  font-size: 0.5625rem;
  font-weight: bold;
  line-height: 1;
  padding: 0.5625rem 0.5rem 0.4375rem;
  text-transform: uppercase;
`;

const StyledNew = styled(StyledSpan)`
  background-color: var(--dark-cyan);
`;

const StyledFeatured = styled(StyledSpan)`
  background-color: var(--very-dark-grayish-cyan);
  margin-left: 0.5rem;
`;

const Title = styled.h2`
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 700;
  transition: all 0.3s ease-out;

  &:hover {
    color: var(--dark-cyan);
  }
`;

const CompanyList = styled.ul`
  display: flex;
  font-size: 0.8125rem;
  margin-top: 0.75rem;

  li {
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      &::after {
        background-color: rgba(0, 0, 0, 0.5);
        content: '';
        display: block;
        height: 2px;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        width: 2px;

        @media (min-width: 500px) {
          margin-left: 1.125rem;
          margin-right: 1.125rem;
        }
      }
    }
  }
`;

const JobInfo = ({
  company,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
}) => {
  return (
    <InfoWrapper>
      <CompanyWrapper>
        <h3>{company}</h3>
        {isNew && <StyledNew>New!</StyledNew>}
        {isFeatured && <StyledFeatured>Featured</StyledFeatured>}
      </CompanyWrapper>
      <Title>{position}</Title>
      <CompanyList>
        <li>{postedAt}</li>
        <li>{contract}</li>
        <li>{location}</li>
      </CompanyList>
    </InfoWrapper>
  );
};

export default JobInfo;
