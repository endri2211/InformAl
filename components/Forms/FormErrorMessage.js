import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../../utils/colors';

export default function FormErrorMessage({ error, visible }) {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
}

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 5,
    color: Colors.red,
    fontSize: 13,
    marginBottom: 5,
    fontWeight: '600',
    textAlign: 'center'
    
  
  }
});
