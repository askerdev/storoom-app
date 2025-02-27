import { useRouterState } from "@tanstack/react-router";
import { ProfileNavigationContainer } from "@/components/ProfileNavigation/styled";

import { TNavigationItem } from "@/types/navigation";
import ProfileNavigationItem from "./ProfileNavigationItem";

export type TProfileNavigationProps = {
  navigationItems: TNavigationItem[];
};

const ProfileNavigation = ({ navigationItems }: TProfileNavigationProps) => {
  const { location } = useRouterState();

  return (
    <ProfileNavigationContainer>
      {navigationItems.map((item) => (
        <ProfileNavigationItem
          key={item.href}
          active={location.pathname.includes(item.href)}
          {...item}
        />
      ))}
    </ProfileNavigationContainer>
  );
};

export default ProfileNavigation;
