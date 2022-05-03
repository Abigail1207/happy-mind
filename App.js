import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;
