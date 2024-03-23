import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
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
    if (isFocused) {
      const planets = PlanetList.getPlanets();
      setAllPlanets(planets);
    }
  }
    , [isFocused]);

  return (
    <ScrollView style={styles.backgroundScroll}>
    <LinearGradient
      style={styles.container}
      colors={['#000656', '#000546', '#000436', '#000326']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Title title="PlanetC" color={"#fff"} size={25} />
          <Text style={styles.subtitle}>Aqui estão suas conquistas e descobertas de planetas de todo o universo</Text>

        </View>

        <LinearGradient
          style={styles.containerPlanets}
          colors={['#00065F', '#1C005B']}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <View>
            {allPlanets.length > 0 ? (
              <View style={styles.containerPlanetsList}>
                {allPlanets.map((planet) => (
                  <TouchableOpacity
                    key={planet.id}
                    onPress={() => navigation.navigate('Planet', { id: planet.id })}
                  >
                    <View style={styles.planet}>
                      <Image source={planet.image} style={styles.planetImage} />
                      <Text style={styles.planetName}>{planet.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View>
                <Text style={styles.subtitle}>Você ainda não descobriu nenhum planeta</Text>
              </View>
            )}
          </View>



        </LinearGradient>
      </View>
    </LinearGradient>
      </ScrollView>
  )

}
const styles = {
  backgroundScroll: {
    flex: 1,
    height: '100%',
  },
  containerText: {
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 20,
    width: 250,

  },
  subtitle: {
    color: '#F7F7F7',
    fontSize: 15,
  },
  containerPlanets: {
    width: 355,
    height: 550,
    borderTopRightRadius: 50,
  },
  containerPlanetsList: {
    marginTop: 20,
    
  },
  planet: {
    backgroundColor: '#000',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  planetName: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  planetImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
}