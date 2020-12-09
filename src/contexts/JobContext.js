import { createContext, useEffect, useState } from 'react';
import data from '../data.json';

const JobContext = createContext();
export default JobContext;

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   setJobs(data);
  //   setTimeout(() => setLoading(false), 500);
  // }, []);

  useEffect(() => {
    setLoading(true);
    setJobs(data);
    setJobs((jobs) => {
      if (filter.length)
        return jobs.filter((job) => {
          const jobValues = Object.values(job).toString().split(',');
          return filter.every((value) => jobValues.includes(value));
        });
      else return data;
    });
    setTimeout(() => setLoading(false), 500);
  }, [filter]);

  return (
    <JobContext.Provider
      value={{ jobs, setJobs, loading, filter, setFilter, data }}
    >
      {children}
    </JobContext.Provider>
  );
};
