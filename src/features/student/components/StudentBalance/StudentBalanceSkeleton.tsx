import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import BalanceCardSkeleton from "@/features/student/components/BalanceCard/BalanceCardSkeleton";

import Image from "../../../../components/Image";

import walletIcon from "@/assets/icons/wallet.png";

const StudentBalanceSkeleton = () => (
  <Flex
    $flexDirection="column"
    $gap={{
      default: 24,
      lg: 40,
    }}
  >
    <Flex $gap={12} $alignItems="end">
      <Image
        $width={{
          default: 50,
          lg: 60,
        }}
        src={walletIcon}
        alt="wallet"
      />
      <Typography $variant="h2">Мой баланс</Typography>
    </Flex>
    <BalanceCardSkeleton />
  </Flex>
);

export default StudentBalanceSkeleton;
