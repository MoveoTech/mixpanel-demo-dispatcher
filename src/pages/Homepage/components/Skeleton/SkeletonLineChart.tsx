import ContentLoader from "react-content-loader";

const SkeletonLineChart = () => {
  return (
    <ContentLoader
      speed={4}
      width="100%"
      height={300}
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
    >
      <rect x="18" y="80" rx="20" ry="20" width="90%" height="180" />
      <rect x="15" y="95%" rx="10" ry="10" width="35" height="15" />
      <rect x="65" y="95%" rx="10" ry="10" width="35" height="15" />
      <rect x="120" y="95%" rx="10" ry="10" width="35" height="15" />
      <rect x="175" y="95%" rx="10" ry="10" width="35" height="15" />
      <rect x="230" y="95%" rx="10" ry="10" width="35" height="15" />
      <rect x="285" y="95%" rx="10" ry="10" width="35" height="15" />
      <rect x="340" y="95%" rx="10" ry="10" width="35" height="15" />
    </ContentLoader>
  );
};
export default SkeletonLineChart;
