import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CodePush from 'react-native-code-push';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Code Push Sample</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
});

// Checks for new updates based on key on app startup
const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

export default CodePush(codePushOptions)(App);
