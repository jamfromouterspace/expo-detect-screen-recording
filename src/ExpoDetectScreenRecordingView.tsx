import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoDetectScreenRecordingViewProps } from './ExpoDetectScreenRecording.types';

const NativeView: React.ComponentType<ExpoDetectScreenRecordingViewProps> =
  requireNativeViewManager('ExpoDetectScreenRecording');

export default function ExpoDetectScreenRecordingView(props: ExpoDetectScreenRecordingViewProps) {
  return <NativeView {...props} />;
}
