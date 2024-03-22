import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../components/Title'
import PlanetList from '../../models/ListPlanets';
// import styles from './styles'
export default function Home() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    if (isFocused){
      const planetList = new PlanetList();
      setAllPlanets(planetList.getPlanets());
    }
  }
  , [isFocused]);

  return (
    <LinearGradient
    style={styles.container}
    colors={['#000656', '#000546', '#000436', '#000326']}
    start={{ x: 1, y: 0}}
    end={{ x: 1, y: 1}}
>
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Title title="PlanetC" color={"#fff"} size={25} />
        <Text style={styles.subtitle}>Aqui estão suas conquistas e descobertas de planetas de todo o universo</Text>
        <View style={styles.containerPlanets}>
          {allPlanets.length > 0 ? (
          allPlanets.map((planet) => (
            <TouchableOpacity
              key={planet.id}
              onPress={() => navigation.navigate('Planet', { id: planet.id })}
            >
              <View style={styles.planet}>
                <Text style={styles.planetName}>{planet.name}</Text>
              </View>
            </TouchableOpacity>
          )) 
          ) : (
            <Text style={styles.subtitle}>Você ainda não descobriu nenhum planeta</Text>
          )}
          </View>
      </View>

        <LinearGradient
    style={styles.containerPlanets}
    colors={['#00065F', '#1C005B']}
    start={{ x: 1, y: 0}}
    end={{ x: 1, y: 1}}>

          

          </LinearGradient>
        </View>
        </LinearGradient>
  )

}
const styles = {
  container: {
    flex: 1,
  },
  containerText: {
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 220,
    width: 250,

  },
  subtitle: {
    color: '#F7F7F7',
    fontSize: 15,  
  },
  containerPlanets: {
    width: 413,
    height: 550,
    borderTopRightRadius: 50,
  }
}