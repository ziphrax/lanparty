import UserService from "../services/User.service";

const RenderOnAnonymous = ({ children }) =>
  !UserService.isLoggedIn() ? children : null;

export default RenderOnAnonymous;
