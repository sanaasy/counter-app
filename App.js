import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [zero, setZero] = useState(true);

  const decreaseCount = () => {
    if(count <= 0){
      setZero(true)
      alert("Count is already at 0.")
      return
    }

    setCount(count - 1);
  }

  const increaseCount = () => {
    setCount(count + 1);

    setZero(false)
  }

  return (
    <View style={styles.container}>
      <Text>COUNTER APP</Text>
      <Text style={styles.count}> { count } </Text>
      <View style={styles.rowButtons}>
        <TouchableOpacity onPress={decreaseCount} style={styles.button} disabled={zero}>
          <Text style={styles.buttonText}> Decrease </Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity onPress={increaseCount} style={styles.button}>
          <Text style={styles.buttonText}> Increase </Text>
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
    padding: 10,
    fontSize: 100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#BBBDF6",
    padding: 20, 
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  rowButtons: {
    flexDirection: 'row',
  },
  space: {
    width: 50,
  }
});
