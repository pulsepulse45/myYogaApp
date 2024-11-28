// screens/Home.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to My Yoga App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5" },
  headerText: { fontSize: 24, fontWeight: "bold" },
});

export default Home;
