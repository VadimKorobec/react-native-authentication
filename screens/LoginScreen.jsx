import { useContext, useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import { login } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticatig] = useState(false);

  const authCtx = useContext(AuthContext);

  const handlerLogin = async ({ email, password }) => {
    setIsAuthenticatig(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticatig(false);
    }

  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin you in ..." />;
  }
  return <AuthContent isLogin onAuthenticate={handlerLogin} />;
}

export default LoginScreen;
