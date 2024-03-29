import { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = () => {
      const test = onAuthStateChangedListener((user) => {
        console.log(user);
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });

      return test;
    };

    unsubscribe();
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
