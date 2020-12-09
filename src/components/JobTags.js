import { useContext } from 'react';
import styled from 'styled-components';
import JobContext from '../contexts/JobContext';

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    background-color: var(--filter);
    border-radius: 0.25rem;
    color: var(--dark-cyan);
    cursor: pointer;
    font-size: 0.6875rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    padding: 0.625rem 0.5rem 0.5rem;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: var(--dark-cyan);
      color: #fff;
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const JobTags = ({ role, level, languages, tools }) => {
  const { filter, setFilter } = useContext(JobContext);
  const tags = [role, level, ...languages, ...tools];

  const handleClick = ({ target }) => {
    const tagValue = target.innerText;
    if (!filter.includes(tagValue)) setFilter([...filter, tagValue]);
  };

  return (
    <TagList>
      {tags.map((tag, index) => (
        <li key={index} onClick={handleClick}>
          {tag}
        </li>
      ))}
    </TagList>
  );
};

export default JobTags;
