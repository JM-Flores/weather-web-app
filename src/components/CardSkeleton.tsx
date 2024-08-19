import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height="150px" width="450px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default CardSkeleton;
