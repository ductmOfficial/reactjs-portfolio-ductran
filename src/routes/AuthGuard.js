import { useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthGuard = ({ children }) => {
  const location = useLocation();
  const auth = { token: '123455' };

  if (!auth.token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
