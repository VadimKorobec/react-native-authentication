import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticatig] = useState(false);

  const handlerLogin = async ({ email, password }) => {
    setIsAuthenticatig(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
    }

    setIsAuthenticatig(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin you in ..." />;
  }
  return <AuthContent isLogin onAuthenticate={handlerLogin} />;
}

export default LoginScreen;
