import { useLocation } from 'react-router-dom';
import { useLoading } from './Loading';

import SkeletonHome from "./SkeletonHome";
import SkeletonHeader from "./SkeletonHeader";
import SkeletonProfile from './SkeletonProfile';
import SkeletonLogin from './SkeletonLogin';
import SkeletonSignup from './SkeletonSignup';

const PageLayout = ({ children }) => {
  const { isLoading } = useLoading();
  const location = useLocation();

  if (!isLoading) return children;

  if (location.pathname === '/') return <SkeletonHome />;
  if (location.pathname === '/Signup') return <SkeletonSignup />;
  if (location.pathname === '/Login') return <SkeletonLogin />;
  if (location.pathname === '/Profile') return <SkeletonProfile />;

  return <div className="skeleton" style={{ height: '300px' }}>Loading...</div>;
};

export default PageLayout;
