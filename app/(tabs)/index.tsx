import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello saya akhyar alhafiz</Text>
      <Text style={styles.text}>Bebas bebas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000',
  },
  text: {
    fontSize: 30,
    color: '#333'
  }
});

export default App;