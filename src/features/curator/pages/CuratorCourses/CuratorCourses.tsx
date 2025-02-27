import Flex from "@/components/ui/Flex";
import Typography from "@/components/ui/Typography";
import Input from "@/components/ui/Input";
import Box from "@/components/ui/Box";
import CuratorAccordionNavigation from "@/features/student/components/AccordionNavigation/CuratorAccordionNavigation";

const CuratorCourses = () => (
  <Flex
    $flexDirection="column"
    $gap={{
      default: 20,
      lg: 36,
    }}
  >
    <Flex
      $width="100%"
      $alignItems={{
        default: "center",
      }}
      $justifyContent={{
        lg: "space-between",
      }}
      $flexDirection={{
        default: "column",
        lg: "row",
      }}
      $gap={12}
    >
      <Typography $variant="h2">Курсы</Typography>
      <Input placeholder="Поиск" isSearch />
    </Flex>
    <Box $position="relative" $width="100%">
      <CuratorAccordionNavigation navigateTo="/curator/$course/$lesson" />
    </Box>
  </Flex>
);

export default CuratorCourses;
