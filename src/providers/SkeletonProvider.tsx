import { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonProvider = ({ children }: { children: React.ReactNode }) => {
  return <SkeletonTheme>{children}</SkeletonTheme>;
};

export default SkeletonProvider;
