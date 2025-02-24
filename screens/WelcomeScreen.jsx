import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  const [fetchMessage, setFetchMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(
          "https://react-native-authenticat-6e673-default-rtdb.firebaseio.com/message.json"
        );
        setFetchMessage(response.data);
      } catch (error) {
        throw new Error();
      }
    };
    fetchMessage();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
