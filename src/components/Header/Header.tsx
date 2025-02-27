import { Link } from "@tanstack/react-router";
import { useStoreon } from "storeon/react";
import Bell from "@/components/ui/icons/Bell";
import Human from "@/components/ui/icons/Human";

import Typography from "@/components/ui/Typography";
import Enter from "@/components/ui/icons/Enter";
import Flex from "@/components/ui/Flex";
import useLogout from "@/api/queries/auth/useLogout";
import useAuth from "@/api/queries/auth/useAuth";
import {
  HeaderBurgerMenuNavigationContainer,
  HeaderContainer,
  HeaderLogo,
  HeaderNavigationContainer,
  HeaderNavigationItem,
  HeaderWrapper,
  ProfileLink,
} from "@/components/Header/styled";
import BurgerMenu from "@/components/BurgerMenu";
import { AllRoles } from "@/constants/enums";
import { BasePages } from "@/constants/auth";
import { ChatEvents, ChatState } from "@/store/chats.ts";
import useGetNotifications from "@/api/queries/chats/useGetNotifications.ts";

const Header = () => {
  const { chats } = useStoreon<ChatState, ChatEvents>("chats");
  const { mutate: logout } = useLogout();
  const { data: user } = useAuth();
  useGetNotifications();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <BurgerMenu>
          <HeaderBurgerMenuNavigationContainer>
            {/* <HeaderNavigationItem> */}
            {/*   <Typography $variant="text1" $color="gray_200"> */}
            {/*     О нас */}
            {/*   </Typography> */}
            {/* </HeaderNavigationItem> */}
            {/* <HeaderNavigationItem> */}
            {/*   <Typography $variant="text1" $color="gray_200"> */}
            {/*     Курсы */}
            {/*   </Typography> */}
            {/* </HeaderNavigationItem> */}
            {(AllRoles.student === user?.role ||
              AllRoles.curator === user?.role) && (
              <HeaderNavigationItem
                as={Link}
                to={`/${user.role}/notifications`}
              >
                <Typography $variant="text1" $color="gray_200">
                  Уведомления
                </Typography>
              </HeaderNavigationItem>
            )}
            {!!user && (
              <HeaderNavigationItem as={Link} to={BasePages[user.role]}>
                <Typography $variant="text1" $color="gray_200">
                  Профиль
                </Typography>
              </HeaderNavigationItem>
            )}
            <HeaderNavigationItem
              as="button"
              type="button"
              onClick={() => logout()}
            >
              <Flex $alignItems="center" $gap={12}>
                <Enter $color="gray_100" $size={48} />
                <Typography $variant="button" $color="gray_200">
                  Выйти
                </Typography>
              </Flex>
            </HeaderNavigationItem>
          </HeaderBurgerMenuNavigationContainer>
        </BurgerMenu>
        <HeaderNavigationContainer>
          {/* <HeaderNavigationItem> */}
          {/*   <Typography $variant="text1" $color="gray_200"> */}
          {/*     О нас */}
          {/*   </Typography> */}
          {/* </HeaderNavigationItem> */}
          {/* <HeaderNavigationItem> */}
          {/*   <Typography $variant="text1" $color="gray_200"> */}
          {/*     Курсы */}
          {/*   </Typography> */}
          {/* </HeaderNavigationItem> */}
        </HeaderNavigationContainer>
        <HeaderLogo />
        <HeaderNavigationContainer>
          {(AllRoles.student === user?.role ||
            AllRoles.curator === user?.role) && (
            <HeaderNavigationItem as={Link} to={`/${user.role}/notifications`}>
              <Bell
                $color="gray_200"
                $size={24}
                $withNotification={Object.values(chats.notifications).includes(
                  true,
                )}
              />
            </HeaderNavigationItem>
          )}
          {!!user && (
            <HeaderNavigationItem as={Link} to={BasePages[user.role]}>
              <Human $color="gray_200" $size={24} />
              <Typography $variant="text1" $color="gray_200">
                {user.name}
              </Typography>
            </HeaderNavigationItem>
          )}
          <HeaderNavigationItem
            as="button"
            type="button"
            onClick={() => logout()}
          >
            <Enter $color="gray_100" $size={48} />
          </HeaderNavigationItem>
        </HeaderNavigationContainer>
        {!!user && (
          <ProfileLink as={Link} to={BasePages[user.role]} aria-label="profile">
            <Human $size={44} $color="gray_200" />
          </ProfileLink>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
