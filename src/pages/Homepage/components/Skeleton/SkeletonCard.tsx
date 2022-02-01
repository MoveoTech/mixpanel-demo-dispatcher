import ContentLoader from "react-content-loader";
import { CardStyled } from "../../../../components/Card/style";
import { useMediaQuery } from "react-responsive";
import { device } from "../../../../globalStyle/theme";

const SkeletonCard = () => {
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  return (
    <CardStyled>
      {!isMobileDevice ? (
        <ContentLoader
          speed={4}
          width="100%"
          height={300}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
        >
          <rect x="0" y="0" rx="20" ry="20" width="244" height="100%" />
          <rect x="250" y="18" rx="10" ry="10" width="170" height="15" />
          <rect x="250" y="60" rx="10" ry="10" width="370" height="20" />
          <rect x="250" y="100" rx="10" ry="10" width="170" height="15" />
          <rect x="250" y="140" rx="10" ry="10" width="470" height="40" />
          <rect x="80%" y="80%" rx="10" ry="10" width="150" height="40" />
        </ContentLoader>
      ) : (
        <ContentLoader
          speed={4}
          width="100%"
          height={450}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
        >
          <rect x="0" y="0" rx="20" ry="20" width="100%" height="150" />
          <rect x="15" y="170" rx="10" ry="10" width="170" height="15" />
          <rect x="15" y="210" rx="10" ry="10" width="300" height="40" />
          <rect x="15" y="270" rx="10" ry="10" width="170" height="15" />
          <rect x="15" y="300" rx="10" ry="10" width="300" height="70" />
          <rect x="15" y="90%" rx="10" ry="10" width="90%" height="40" />
        </ContentLoader>
      )}
    </CardStyled>
  );
};
export default SkeletonCard;
