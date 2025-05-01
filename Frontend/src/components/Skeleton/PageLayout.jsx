import { useLocation } from 'react-router-dom';
import { useLoading } from './Loading';
import SkeletonSpinner from './SkeletonSpinner';
import SkeletonHome from "./SkeletonHome";
// import SkeletonHeader from "./SkeletonHeader";
import SkeletonProfile from './SkeletonProfile';
import SkeletonLogin from './SkeletonLogin';
import SkeletonSignup from './SkeletonSignup';
import SkeletonSearchResults from './SkeletonSearchResults';
import SkeletonComments from './SkeletonComments'; 
import SkeletonMoviePlayer from './SkeletonMoviePlayer'; 
import SkeletonMovieDescription from './SkeletonMovieDescription';

const PageLayout = ({ children }) => {
  const { isLoading } = useLoading();
  const location = useLocation();

  if (!isLoading) return children;

  if (location.pathname === '/') return <SkeletonHome />;
  if (location.pathname === '/Signup') return <SkeletonSignup />;
  if (location.pathname === '/Login') return <SkeletonLogin />;
  if (location.pathname === '/Profile') return <SkeletonProfile />;
  if (location.pathname === '/SearchResults' || location.pathname === '/WatchList') return <SkeletonSearchResults />;
  if (location.pathname.startsWith('/MoviePlayer')) { return <SkeletonMoviePlayer />; } 
  // if (location.pathname.startsWith('/MovieDescription/')) { return <SkeletonMovieDescription />;}

  return <div> <SkeletonSpinner /> </div>;
};

export default PageLayout;
