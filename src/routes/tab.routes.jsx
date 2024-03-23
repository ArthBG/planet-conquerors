import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";
import PlanetsC from "../screens/PlanetsC";
import { PlanetsData } from "../data/Planets";
import PlanetList from "../models/ListPlanets";

const planets = PlanetList.getPlanets();
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
    initialRouteName="Home"
    >
     <Tab.Screen name="Home" component={Home} initialParams={{ planets, PlanetsData }} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Profile" component={Profile}  /*options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}*/ />
      <Tab.Screen name="PlanetsC" component={PlanetsC} initialParams={{ PlanetsData: null, edit: false }} />
    </Tab.Navigator>
  );
}

export default TabRoutes;