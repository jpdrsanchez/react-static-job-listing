import Header from './components/Header';
import JobList from './components/JobList';
import GlobalStyles from './styles/global';
import { JobProvider } from './contexts/JobContext';
import JobFilter from './components/JobFilter';
import Footer from './components/Footer';

const App = () => {
  return (
    <JobProvider>
      <Header />
      <JobFilter />
      <JobList />
      <Footer />
      <GlobalStyles />
    </JobProvider>
  );
};

export default App;
