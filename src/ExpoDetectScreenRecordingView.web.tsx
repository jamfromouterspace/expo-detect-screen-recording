import * as React from 'react';

import { ExpoDetectScreenRecordingViewProps } from './ExpoDetectScreenRecording.types';

export default function ExpoDetectScreenRecordingView(props: ExpoDetectScreenRecordingViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
