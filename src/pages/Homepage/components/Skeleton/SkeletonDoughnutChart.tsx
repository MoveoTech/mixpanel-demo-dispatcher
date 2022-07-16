import ContentLoader from "react-content-loader";

const SkeletonDoughnutChart = () => {
  return (
    <ContentLoader
      speed={4}
      width="100%"
      height={300}
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
    >
      <rect x="130" y="0" rx="100" ry="100" width="120" height="120" />
      <rect x="50" y="140" rx="100" ry="100" width="10" height="10" />
      <rect x="50" y="180" rx="100" ry="100" width="10" height="10" />
      <rect x="50" y="220" rx="100" ry="100" width="10" height="10" />
      <rect x="50" y="260" rx="100" ry="100" width="10" height="10" />

      <rect x="70" y="140" rx="10" ry="10" width="50" height="10" />
      <rect x="70" y="180" rx="10" ry="10" width="50" height="10" />
      <rect x="70" y="220" rx="10" ry="10" width="50" height="10" />
      <rect x="70" y="260" rx="10" ry="10" width="50" height="10" />

      <rect x="75%" y="140" rx="10" ry="10" width="40" height="10" />
      <rect x="75%" y="180" rx="10" ry="10" width="40" height="10" />
      <rect x="75%" y="220" rx="10" ry="10" width="40" height="10" />
      <rect x="75%" y="260" rx="10" ry="10" width="40" height="10" />
    </ContentLoader>
  );
};
export default SkeletonDoughnutChart;
