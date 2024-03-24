import { LinearGradient } from "expo-linear-gradient";
import { Text, View, Image, ScrollView } from "react-native";

const PlanetMaker = ({ primaryColor, secondaryColor }) => {
    return (
        <LinearGradient
        style={{
            width: 110,
            height: 110,
            borderRadius: 140,
            justifyContent: "center",
            alignItems: "center",
        }}
        colors={[primaryColor, secondaryColor]}
        start={{ x: 0.8, y: 1.3 }}
        end={{ x: 1.4, y: 0.5 }}
        >
        <Text></Text>
        </LinearGradient>
    );
    }

export default PlanetMaker;