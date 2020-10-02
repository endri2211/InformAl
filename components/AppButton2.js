import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../utils/colors';

export default function AppButton2({ title, onPress, color = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor:  "rgb(130, 130, 130)" }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
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
