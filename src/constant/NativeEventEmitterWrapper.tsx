import { NativeEventEmitter } from "react-native";
import Tts from "react-native-tts";

const TtsEmitter = new NativeEventEmitter(Tts);

if (!TtsEmitter.removeListeners) {
  TtsEmitter.removeListeners = () => {};
}

export default TtsEmitter;
