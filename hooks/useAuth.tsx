import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth } from "../firebaseConfig";

interface User {
  id: string;
  name: string;
  email: string;
}

// Creates a type for the AuthContext.
interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

// Creates an initial context value.
const initialAuthContextValue: AuthContextType = {
  user: null,
  signInWithGoogle: async () => {},
  logout: async () => {},
};

const AuthContext = createContext<AuthContextType>(initialAuthContextValue);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<Error | null>(null);
  const initialUser: User = {
    id: "", // Default value for id
    name: "", // Default value for name
    email: "",
  };
  const [user, setUser] = useState<User | null>(initialUser);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser: FirebaseUser | null) => {
        const newUser: User | null = authenticatedUser
          ? { id: authenticatedUser.uid, name: "", email: authenticatedUser.email || "" }
          : null;
        setUser(newUser);
        setLoading(false);
      }
    );
    return () => {
      unsubscribeAuth(); // Unsubscribe auth listener on unmount
    };
  }, [user]);

  const signInWithGoogle = async () => {
  };

  const logout = async () => {
  };

  // Creates a memoized value with the correct types.
  const memoedValue: AuthContextType = useMemo(
    () => ({
      user,
      signInWithGoogle,
      logout,
    }),
    [user, error, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};
