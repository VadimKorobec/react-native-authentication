import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import { createUser } from "../util/auth";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticatig] = useState(false);

  const handlerSighUp = async ({ email, password }) => {
    setIsAuthenticatig(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later."
      );
    }

    setIsAuthenticatig(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={handlerSighUp} />;
}

export default SignupScreen;
