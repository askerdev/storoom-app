import { Link } from "@tanstack/react-router";
import { LogoImage, TLogoImageProps } from "@/components/ui/Logo/styled";
import useAuth from "@/api/queries/auth/useAuth";
import logo from "@/assets/logo.png";
import { BasePages } from "@/constants/auth";

const Logo = (props: TLogoImageProps) => {
  const { data: user } = useAuth();

  return (
    <Link to={user ? BasePages[user.role] : "#"}>
      <LogoImage src={logo} alt="logo" {...props} />
    </Link>
  );
};
export default Logo;
