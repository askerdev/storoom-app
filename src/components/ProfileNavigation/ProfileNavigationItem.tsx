import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { TNavigationItem } from "@/types/navigation";

const ProfileNavigationItem = ({
  active,
  href,
  icon,
  displayName,
}: TNavigationItem & { active: boolean }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleOnClick = () => {
    if (!ref.current) {
      return;
    }

    ref.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
      inline: "center",
    });
  };

  return (
    <Button
      ref={ref}
      as={Link}
      to={href}
      key={href}
      $variant={active ? "primary" : "outline"}
      $gap={8}
      $alignItems="end"
      onClick={handleOnClick}
    >
      {icon}
      {displayName}
    </Button>
  );
};

export default ProfileNavigationItem;
