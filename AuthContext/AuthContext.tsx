import React, {
  createContext,
  useState,
  FunctionComponent,
  ReactNode,
} from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../navigations/AuthNavigator";
import { StackParamList2 } from "../navigations/MainNavigator";

interface AuthContextType {
  userAuthenticated: boolean;
  setUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: NavigationProp<StackParamList & StackParamList2>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const navigation =
    useNavigation<NavigationProp<StackParamList & StackParamList2>>();

  return (
    <AuthContext.Provider
      value={{ userAuthenticated, setUserAuthenticated, navigation }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
