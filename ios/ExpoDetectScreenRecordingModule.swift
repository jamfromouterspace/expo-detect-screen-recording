import ExpoModulesCore

public class ExpoDetectScreenRecordingModule: Module {
    
    private var isRecordingScreen = false
    
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoDetectScreenRecording')` in JavaScript.
    Name("ExpoDetectScreenRecording")

    // Defines event names that the module can send to JavaScript.
    Events("onScreenshot", "onRecordingStart", "onRecordingStop")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      return "Hello world! 👋"
    }
      
    Function("isRecording") {
        return self.isRecordingScreen
    }
      
    OnStartObserving {
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(screenshotListener),
            name: UIApplication.userDidTakeScreenshotNotification,
            object: nil
        )
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(screenrecordListener),
            name: UIScreen.capturedDidChangeNotification,
            object: nil
        )
    }

    OnStopObserving {
        NotificationCenter.default.removeObserver(
            self,
            name: UIApplication.userDidTakeScreenshotNotification,
            object: nil
        )
        
        NotificationCenter.default.removeObserver(
            self,
            name: UIScreen.capturedDidChangeNotification,
            object: nil
        )
    }
  }
    
    @objc
    private func screenshotListener() {
        sendEvent("onScreenshot")
    }
    
    @objc
    private func screenrecordListener() {
        isRecordingScreen.toggle()
        sendEvent(isRecordingScreen ? "onRecordingStart" : "onRecordingStop")
    }
}
