import LoginButton from "@/components/auth/LoginButton";
import LogoutButton from "@/components/auth/LogoutButton";
import Logo from "@/components/logo/Logo";
import UserInfo from "@/components/userInfo/UserInfo";
import React from "react";

type Props = {};

const LandingPage: React.FC<Props> = (props) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div>
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h2 className="text-2xl font-bold">Software Development Tool</h2>
          <p>Agile Process Done Easy. Track tasks from Todo to Release</p>
        </div>

        <br />
        <div className="flex justify-center gap-2">
          <LoginButton />
          <LogoutButton />
        </div>
        <UserInfo />
      </div>
    </div>
  );
};

export default LandingPage;
