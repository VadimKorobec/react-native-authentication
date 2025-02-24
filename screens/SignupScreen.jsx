import { useContext, useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import { createUser } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticatig] = useState(false);

  const authCtx = useContext(AuthContext);

  const handlerSighUp = async ({ email, password }) => {
    setIsAuthenticatig(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later."
      );
      setIsAuthenticatig(false);
    }

  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={handlerSighUp} />;
}

export default SignupScreen;
