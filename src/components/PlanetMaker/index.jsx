import { LinearGradient } from "expo-linear-gradient";
import { Text, View, Image, ScrollView } from "react-native";

const PlanetMaker = ({ primaryColor, secondaryColor }) => {
    return (
        <LinearGradient
        style={{
            width: 280,
            height: 280,
            borderRadius: 140,
            justifyContent: "center",
            alignItems: "center",
        }}
        colors={[primaryColor, secondaryColor]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
        <Text>0</Text>
        </LinearGradient>
    );
    }

export default PlanetMaker;