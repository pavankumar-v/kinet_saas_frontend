import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="App">
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
}

export default App;
