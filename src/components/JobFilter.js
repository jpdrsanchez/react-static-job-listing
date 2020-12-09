import styled, { keyframes } from 'styled-components';
import Container from './Container';
import JobContext from '../contexts/JobContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

const showFilter = keyframes`
  from {
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const showTag = keyframes`
  from {
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const FilterContainer = styled(Container)`
  animation: ${showFilter} 0.5s forwards;
  opacity: 0;
  position: relative;
  top: -2.25rem;

  @media (min-width: 700px) {
    left: 0;
    position: absolute;
    top: 7.5rem;
    right: 0;
    z-index: 999;
  }
`;

const FilterWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0.75rem 2.5rem;

  @media (min-width: 500px) {
    padding-left: 1.125rem;
    padding-right: 1.125rem;
  }
`;

const FilterList = styled.ul`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;

  li {
    animation: ${showTag} 0.3s forwards;
    align-items: center;
    background-color: var(--filter);
    border-radius: 0.25rem;
    color: var(--dark-cyan);
    display: flex;
    font-size: 0.6875rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s;

    span {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    button {
      background-color: var(--dark-cyan);
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 0.875rem;
      outline: 0;
      padding: 0.5625rem;
      transition: all 0.3s ease-out;

      &:hover {
        background-color: var(--very-dark-grayish-cyan);
      }
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const Clear = styled.button`
  background: none;
  border: none;
  color: var(--very-dark-grayish-cyan);
  cursor: pointer;
  font-family: var(--main-font);
  font-size: 0.75rem;
  font-weight: 700;
  outline: none;
  transition: all 0.3s ease-out;

  &:hover {
    color: var(--dark-cyan);
    text-decoration: underline;
  }
`;

const JobFilter = () => {
  const { filter, setFilter } = useContext(JobContext);

  const handleClick = ({ currentTarget }) => {
    const currentItem = currentTarget.previousElementSibling.innerText;
    setFilter(filter.filter((item) => item !== currentItem));
  };

  if (!filter.length) return null;
  else
    return (
      <FilterContainer>
        <FilterWrapper>
          <FilterList>
            {filter.map((item) => (
              <li key={item}>
                <span>{item}</span>
                <button aria-label="close" onClick={handleClick}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            ))}
          </FilterList>
          <Clear onClick={() => setFilter([])}>Clear</Clear>
        </FilterWrapper>
      </FilterContainer>
    );
};

export default JobFilter;
