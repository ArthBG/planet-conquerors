import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import PlanetDetails from "../screens/PlanetDetails";
import Profile from "../screens/Profile";
import PlanetsC from "../screens/PlanetsC";
import { PlanetsData } from "../data/Planets";
import PlanetList from "../models/ListPlanets";

const planets = PlanetList.getPlanets();
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,
    tabBarStyle: { backgroundColor: "#000540",
    borderTopColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25}
    }}
    initialRouteName="Home"
    >
     <Tab.Screen name="Home" component={Home} initialParams={{ planets, PlanetsData }} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="home"
            size={24}
            color={focused ? "#83C6F2" : "#D6D6D6"}
          />
        ),
        tabBarLabel: "Inicial",
        tabBarActiveTintColor: "#83C6F2",
        tabBarInactiveTintColor: "#D6D6D6",
      }}/>
      <Tab.Screen name="Desenvolvedor" component={Profile}  
       options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="user"
            size={24}
            color={focused ? "#83C6F2" : "#D6D6D6"}
          />
        ),
        tabBarLabel: "Perfil",
        tabBarActiveTintColor: "#83C6F2",
        tabBarInactiveTintColor: "#D6D6D6",
      }}/>

      <Tab.Screen 
        name="PlanetDetails" 
        component={PlanetDetails} 
        initialParams={{ PlanetsData: null, edit: false }}
        options={{
          tabBarVisible: false,
          headerShown: false,
          tabBarItemStyle: {
            display: "none",
          },
        }} 
      />
      <Tab.Screen name="PlanetsC" component={PlanetsC} initialParams={{ PlanetsData: null , edit: false }}  options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#83C6F2" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Registre",
          tabBarActiveTintColor: "#83C6F2",
          tabBarInactiveTintColor: "#D6D6D6",
        }} />
    </Tab.Navigator>
  );
}

export default TabRoutes;