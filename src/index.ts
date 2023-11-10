import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoDetectScreenRecording.web.ts
// and on native platforms to ExpoDetectScreenRecording.ts
import ExpoDetectScreenRecordingModule from './ExpoDetectScreenRecordingModule';
import ExpoDetectScreenRecordingView from './ExpoDetectScreenRecordingView';
import { ChangeEventPayload, ExpoDetectScreenRecordingViewProps } from './ExpoDetectScreenRecording.types';

// Get the native constant value.
export const PI = ExpoDetectScreenRecordingModule.PI;

export function hello(): string {
  return ExpoDetectScreenRecordingModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoDetectScreenRecordingModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoDetectScreenRecordingModule ?? NativeModulesProxy.ExpoDetectScreenRecording);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoDetectScreenRecordingView, ExpoDetectScreenRecordingViewProps, ChangeEventPayload };
