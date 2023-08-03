import { Link } from "react-router-dom";
import UserService from "../services/User.service";

const Menu = () => (
  <nav>
    <div>
      <div id="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        {UserService.isLoggedIn() && (   
          <div>
              <p>
                Signed in as {UserService.getUsername()}
              </p>
                <button type="button" onClick={() => UserService.doLogout()}>
                Logout
              </button>
            </div> 
        )}

        {!UserService.isLoggedIn() && (
            <button type="button" onClick={() => UserService.doLogin()}>
              Login
            </button>
        )}
      </div>
    </div>
  </nav>
)

export default Menu