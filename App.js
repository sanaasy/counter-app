import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [zero, setZero] = useState(true);

  const decreaseCount = () => {
    if(count - 1 == 0){
      setZero(true);
    }

    setCount(count - 1);
  }

  const increaseCount = () => {
    setCount(count + 1);

    setZero(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.count}> { count } </Text>
      <View style={styles.rowButtons}>
        <TouchableOpacity onPress={decreaseCount} style={styles.button} disabled={zero}>
          <Text> - </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increaseCount} style={styles.button}>
          <Text> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    padding: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
