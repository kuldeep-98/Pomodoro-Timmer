import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timmer from './Timmer'
import styles from './Styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Timmer/>
    </View>
  );
}
