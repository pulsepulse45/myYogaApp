// screens/DetailScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.subtitle}</Text>
      <Text style={styles.duration}>{item.duration}</Text>
      <Button title="Back to List" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 10 },
  duration: { fontSize: 16, marginBottom: 20 },
});

export default DetailScreen;
