import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/state/user';

function Login() {
   const dispatch = useDispatch();

   return (
      <div>
         <button
            onClick={() => {
               dispatch(
                  login({
                     name: 'Matias',
                     age: 23,
                     email: 'matiasbacelar@gmail.com',
                  })
               );
            }}
         >
            Login
         </button>

         <button
            onClick={() => {
               dispatch(logout());
            }}
         >
            LOGOUT
         </button>
      </div>
   );
}

export default Login;
