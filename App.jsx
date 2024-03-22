import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import Routes from "./src/routes";

AppRegistry.registerComponent("App", () => Routes);
AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root"),
});

export default function App() {
  return <Routes />;
}