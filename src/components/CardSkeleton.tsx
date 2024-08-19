import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <>
      <Card>
        <CardBody>
          <Skeleton height="150px" width="450px" />
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default CardSkeleton;
