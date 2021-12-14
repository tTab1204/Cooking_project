import React, { useEffect } from 'react';
import { auth } from '_actions/user_actions';
import { useSelector, useDispatch } from 'react-redux';
import { ROUTES } from 'routes/routes';

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    let user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      let mounted = true;
      dispatch(auth()).then(response => {
        if (!response.payload.isAuth) {
          if (option) props.history.push(ROUTES.LOGIN);
        } else {
          if (adminRoute && !response.payload.isAdmin) props.history.push('/');
          else {
            if (option === false) props.history.push('/');
          }
        }
      });
      return () => (mounted = false);
    }, []);

    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}
