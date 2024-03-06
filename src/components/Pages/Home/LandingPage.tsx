import LoginButton from "@/components/auth/LoginButton";
import LogoutButton from "@/components/auth/LogoutButton";
import Logo from "@/components/logo/Logo";
import UserInfo from "@/components/userInfo/UserInfo";
import React from "react";

type Props = {};

const LandingPage: React.FC<Props> = (props) => {
  return (
    <div>
      <Logo />
      <LoginButton />
      <LogoutButton />
      <UserInfo />
    </div>
  );
};

export default LandingPage;
