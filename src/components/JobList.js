import Container from './Container';
import styled, { keyframes } from 'styled-components';
import JobCard from './JobCard';
import Loading from './Loading';
import JobContext from '../contexts/JobContext';
import { useContext, useEffect, useState } from 'react';

const show = keyframes`
  to {
    opacity: 1;
  }
`;

const StyledSection = styled.section`
  animation: ${show} 0.5s forwards;
  opacity: 0;
  padding-bottom: 3.4375rem;
  padding-top: 3.4375rem;

  @media (min-width: 500px) {
    padding-bottom: calc(4.6875rem - 34px);
    padding-top: 4.6875rem;
  }
`;

const JobList = () => {
  const { jobs, loading } = useContext(JobContext);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) return <Loading />;
  else
    return (
      <StyledSection>
        <Container>
          {jobs.map((job) => (
            <JobCard key={job.id} data={job} scroll={scroll} />
          ))}
        </Container>
      </StyledSection>
    );
};

export default JobList;
