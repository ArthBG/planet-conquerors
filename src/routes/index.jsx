import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';

import TabRoutes from "./tab.routes";


export default function Routes() {
  return (
    <NavigationContainer>
     
      <TabRoutes /> 
     
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}