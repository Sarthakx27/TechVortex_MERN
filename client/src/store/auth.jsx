import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  const [services, setServices] = useState("")

  const storetokenInLS = (servertoken) => {
    return localStorage.setItem("token", servertoken);
  };

  let isLoggedIn = !!token;

  // LOGOUT FUNCTIONALITY
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // TO GET THE LOGGED IN USERS DATA

  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.userData);
        setUser(data.userData);
      }
      else{
        console.log("user api se data fetch ni hora");
      }
    } catch (error) {
      console.log("ERROR IN GETTING THE USERS DATA ", error);
    }
  };

  // to fetch the services from the db
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service",{
        method: "GET",
      })

      if(response.ok){
        const data = await response.json()
        setServices(data.msg)
        console.log(services);
      }
    } catch (error) {
      console.log(error, "Sevices frontend error");
    }
  }

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storetokenInLS, LogoutUser, user, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used of outside of  provider");
  }
  return authContextValue;
};
