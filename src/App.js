import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from "./components/AuthUser";
import Auth from "./navbar/Auth";
import Guest from "./navbar/Guest";

function App() {
   const {getToken} = AuthUser();
   if (!getToken()) {
      return (<Guest />);
   }

   return (<Auth />);
}

export default App;
