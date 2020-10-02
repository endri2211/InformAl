import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../utils/colors';

export default function AppButton1({ title, onPress, color = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "rgb(142, 223, 135)" }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
                alignItems: "center",
                borderRadius: 10,
                width: "50%",
  },
  buttonText: {
    backgroundColor: "transparent",
                  fontSize: 16,
                  color: "rgb(0, 0, 0 )",
                  fontWeight: "bold",
  }
});
