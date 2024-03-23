import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../components/Title'
import PlanetList from '../../models/ListPlanets';
import PlanetMaker from '../../components/PlanetMaker';

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
    <ScrollView style={styles.scrollViewContainer}>
    <LinearGradient
      style={styles.container}
      colors={['#000656', '#000546', '#000436', '#000326']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container2}>
        <View style={styles.containerText}>
          <Image source={require('../../../assets/images/imagesda.png')} style={{ width: 180, height: 180 }} />
          <Title title="PlanetC" color={"#fff"} size={25} />
          <Text style={styles.subtitle}>Aqui estão suas conquistas e descobertas de planetas de todo o universo</Text>
        </View>
        {/* 
         */}
         <View style={styles.backgroundw}>
          <Text style={styles.subtitle}>Planetas descobertos</Text>
          <View style={styles.containerPlanet}>
            <Text style={styles.subtitle}>0</Text>
            </View>
          <Title title="Planetas" color={"#fff"} size={25} />
        </View>
        <LinearGradient
          style={styles.containerPlanets}
          colors={['#fff', '#EEEEEE', '#E3E3E3']}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}>
          {allPlanets.length > 0 ? (
            <View style={styles.containerPlanetsList}>
              {allPlanets.map((planet) => (
                <TouchableOpacity
                  key={planet.id}
                  onPress={() => navigation.navigate("PlanetDetails", { data: planet })}
                >
                  <View style={styles.planet}>
                    {planet.image ? (
                      <Image source={planet.image} style={styles.planetImage} />
                    ) : (
                      <PlanetMaker primaryColor={planet.primaryColor} secondaryColor={planet.secondaryColor} />
                    )
                    }
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
        </LinearGradient>
      </View>
    </LinearGradient>
  </ScrollView>
  
  )

}
const styles = {
  scrollViewContainer: {
    flex: 1,
    minHeight: '100%',  
  },
  container2: {
    marginTop: 20,
    marginBottom: 20,
  },
  containerText: {
    alignItems: 'center',
    marginBottom: 170,
    marginTop: 220,
    justifyContent: 'center',

  },
  backgroundw: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 300,
  },
  subtitle: {
    color: '#F7F7F7',
    marginTop: 20,
    fontSize: 12,
    width: 200,
  },
  containerPlanets: {
    height: 'fit-content',
  },
  containerPlanetsList: {
    marginTop: 20,
    alignItems: 'center',
  },
  planet: {
    backgroundColor: '#000326',
    borderRadius: 10,
    width: 230,
    height: 170,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    allignSelf: 'center',
  },
  planetName: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  planetImage: {
    width: 90,
    height: 100,
    borderRadius: 50,
  },
}