import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoDetectScreenRecording.web.ts
// and on native platforms to ExpoDetectScreenRecording.ts
import ExpoDetectScreenRecordingModule from './ExpoDetectScreenRecordingModule';

export function hello(): string {
  return ExpoDetectScreenRecordingModule.hello();
}

export function isRecording(): string {
  return ExpoDetectScreenRecordingModule.isRecording();
}

const emitter = new EventEmitter(ExpoDetectScreenRecordingModule ?? NativeModulesProxy.ExpoDetectScreenRecording);

export function addScreenshotListener(listener: (event: null) => void): Subscription {
  return emitter.addListener<null>('onScreenshot', listener);
}

export function addRecordStartListener(listener: (event: null) => void): Subscription {
  return emitter.addListener<null>('onRecordingStart', listener);
}

export function addRecordStopListener(listener: (event: null) => void): Subscription {
  return emitter.addListener<null>('onRecordingStop', listener);
}