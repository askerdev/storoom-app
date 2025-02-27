import Typography from "@/components/ui/Typography";
import Flex from "@/components/ui/Flex";
import useAuth from "@/api/queries/auth/useAuth";
import BalanceCard from "@/features/student/components/BalanceCard";
import Image from "../../../../components/Image";
import walletIcon from "@/assets/icons/wallet.png";
import StudentBalanceSkeleton from "./StudentBalanceSkeleton";
import { IStudentProfileRes } from "@/types/response.api";

const StudentBalance = () => {
  const { data: profile, isPending } = useAuth<IStudentProfileRes>();

  if (isPending) {
    return <StudentBalanceSkeleton />;
  }

  return (
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
      <BalanceCard balance={profile?.student?.balance || 0} />
    </Flex>
  );
};

export default StudentBalance;
