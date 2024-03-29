import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

const PlanetMaker = ({ primaryColor, secondaryColor, lockit }) => {
    const containerStyle = lockit == "no"
      ? {
          width: 110,
          height: 110,
          borderRadius: 140,
          justifyContent: "center",
          alignItems: "center",
        }
      : {
          width: 280,
          height: 280,
          borderRadius: 140,
          justifyContent: "center",
          alignItems: "center",
        };
  
    return (
      <LinearGradient
        style={containerStyle}
        colors={[primaryColor, secondaryColor]}
        start={{ x: 0.8, y: 1.3 }}
        end={{ x: 1.4, y: 0.5 }}
      >
      </LinearGradient>
    );
  };

export default PlanetMaker;