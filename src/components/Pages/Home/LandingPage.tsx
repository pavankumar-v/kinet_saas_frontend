import Spinner from "@/components/ui/Spinner";
import LoginButton from "@/components/auth/LoginButton";
import LogoutButton from "@/components/auth/LogoutButton";
import Logo from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const LandingPage: React.FC<Props> = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-3">
            <Logo />
          </div>
          <h2 className="text-2xl font-bold">Software Development Tool</h2>
          <p>Agile Process Done Easy. Track tasks from Todo to Release</p>
        </div>

        <br />
        <div className="flex justify-center gap-2">
          {isLoading ? (
            <Spinner />
          ) : isAuthenticated ? (
            <Link to="/">
              <Button variant="default">Go to Dashboard</Button>
            </Link>
          ) : (
            <>
              <LoginButton />
              <LogoutButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
