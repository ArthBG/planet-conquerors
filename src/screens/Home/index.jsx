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
         <View style={styles.backgroundw}>
          <View style={styles.containerTexts}>
          <Title title="Planetas conquistados" color={"#fff"} size={25} />
          <Text style={styles.subtitle}>Clique em um planeta para ver mais detalhes</Text>
          </View>
        </View>
        <LinearGradient
          style={styles.containerPlanets}
          colors={['#000326','#000439', '#00032F', '#00021E']}
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
                      <PlanetMaker primaryColor={planet.primaryColor} secondaryColor={planet.secondaryColor} lockit={"no"}/>
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
  containerTexts: {
    marginLeft: 20,
  },
  backgroundw: {
    width: '100%',
    backgroundColor: '#000326',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    marginTop: 1,
    alignItems: 'center',
  },
  planet: {
    backgroundColor: '#000538',
    borderRadius: 10,
    width: 230,
    height: 200,
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
    width: 110,
    height: 110,
    borderRadius: 140,
  },
}