import { StyleSheet, Text, View } from 'react-native';

import * as ExpoDetectScreenRecording from 'expo-detect-screen-recording';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoDetectScreenRecording.hello()}</Text>
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
});
