import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StorybookUIRoot from './.storybook';

const SHOW_STORYBOOK = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default SHOW_STORYBOOK ? StorybookUIRoot : App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});