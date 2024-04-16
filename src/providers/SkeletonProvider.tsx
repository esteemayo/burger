import { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SkeletonTheme baseColor='#fbfbfc' highlightColor='#f9f9f9'>
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonProvider;
