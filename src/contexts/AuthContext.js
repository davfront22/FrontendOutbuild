import { createContext, useContext } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { DUMMY_USER } from "utils/constants";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const login = (email, password) => {
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      const userData = { email };
      setUser(userData);
      return true;
    } else {
      return false;
    }
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
