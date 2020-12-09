import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import JobImage from './JobImage';
import JobInfo from './JobInfo';
import JobTags from './JobTags';

const Card = styled.div`
  background-color: #fff;
  ${(props) =>
    props.featured &&
    css`
      border-left: 5px solid var(--dark-cyan);
    `};
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  padding: 2rem 1.5rem;
  position: relative;
  transform: ${(props) => (props.visible ? 'none' : 'translateX(-30px)')};
  transition: opacity 0.3s ease-out, transform 0.5s ease-out;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
    @media (min-width: 700px) {
      margin-bottom: 1.5rem;
    }
  }

  & > *:last-child {
    @media (max-width: 699px) {
      grid-column: span 2;
    }
  }

  @media (min-width: 500px) {
    align-items: center;
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: auto minmax(300px, 1fr);
    padding: 2rem 2.5rem;
  }

  @media (min-width: 700px) {
    grid-template-columns: auto minmax(300px, 1fr) auto;
  }
`;

const JobCard = ({ data, scroll }) => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;

  const element = useRef();
  const halfWindow = window.innerHeight * 0.8;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const topElement = element.current.getBoundingClientRect().top;
    if (topElement <= halfWindow) {
      setVisible(true);
    }
  }, [scroll, halfWindow]);

  return (
    <Card ref={element} featured={featured} visible={visible}>
      <JobImage image={logo} company={company} />
      <JobInfo
        company={company}
        isNew={isNew}
        isFeatured={featured}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
      />
      <JobTags role={role} level={level} languages={languages} tools={tools} />
    </Card>
  );
};

export default JobCard;
