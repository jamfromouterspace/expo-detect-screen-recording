import { StyleSheet, Text, View } from 'react-native';

import * as ExpoDetectScreenRecording from 'expo-detect-screen-recording';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    ExpoDetectScreenRecording.addRecordStartListener(listener => {
      console.log("SCREENRECORD START")
      setTimeout(() => {
        console.log("isRecording", ExpoDetectScreenRecording.isRecording())
      }, 1000)
    })

    ExpoDetectScreenRecording.addRecordStopListener(listener => {
      console.log("SCREENRECORD STOP")
      setTimeout(() => {
        console.log("isRecording", ExpoDetectScreenRecording.isRecording())
      }, 1000)
    })
  }, [])
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
