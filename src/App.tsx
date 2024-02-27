import "./App.css";
import LoginButton from "@components/auth/LoginButton";
import LogoutButton from "@components/auth/LogoutButton";
import UserInfo from "@components/userInfo/UserInfo";

function App() {
  return (
    <div className="h-screen">
      <LoginButton />
      <LogoutButton />
      <UserInfo />
    </div>
  );
}

export default App;
