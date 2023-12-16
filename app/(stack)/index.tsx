import { User, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "@mobile/context";
import { ActivityIndicator } from "react-native";
import { auth } from "@mobile/config";
import Login from "./auth/login";
import Home from "./home/home";

export default function Page () {
  const [user, setUser] = useState<User | null>(null);
  const { loading } = useContext(AuthenticationContext)

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user)
      })
  }, [])
 
  return loading ? (
    <ActivityIndicator color={'#fff'} size={'small'}/>
  ) : !user ? (
    <Login />
  ) : <Home />
}


