import { ReactNode, createContext, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "expo-router";
import { auth } from "@mobile/config";

export type formData = {
  email: string;
  password: string;
};

type ContextProps = {
  children: ReactNode;
};

type AuthProps = {
  signIn: (data: formData) => void;
  signUp: (data: formData) => void;
  loading: boolean;
};


export const AuthenticationContext = createContext({} as AuthProps);

export function AuthenticationProvider ({children}: ContextProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const signIn = async ({email, password}: formData) => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setUser(user)
      router.push('/home')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async ({ email, password }: formData) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setUser(user);
      router.push('/home')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider value={{ loading, signIn, signUp }}>
      {children}
    </AuthenticationContext.Provider>
  )
  
}

export default AuthenticationProvider