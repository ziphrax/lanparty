import UserService from "../services/User.service";

const RenderOnAuthenticated = ({ children }) =>
  UserService.isLoggedIn() ? children : null;

export default RenderOnAuthenticated;
