package expo.modules.detectscreenrecording

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoDetectScreenRecordingModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // THIS MODULE SEEMS TO BE IMPOSSIBLE ON ANDROID
    // This is all no-ops

    Name("ExpoDetectScreenRecording")

    // Defines event names that the module can send to JavaScript.
    Events("onScreenshot", "onRecordingStart", "onRecordingStop")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      "Hello world! 👋"
    }

    Function("isRecording") {
      false
    }

    OnStartObserving {
      // todo (this might be impossible)
    }

    OnStopObserving {
      // todo (this might be impossible)
    }
  }
}
