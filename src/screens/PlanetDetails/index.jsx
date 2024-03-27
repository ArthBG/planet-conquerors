import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title'
import PlanetList from '../../models/ListPlanets'
import styles from './styles'
import PlanetMaker from '../../components/PlanetMaker';
import { Feather, MaterialCommunityIcons, Fontisto, FontAwesome5Brands } from '@expo/vector-icons';
export default function Planet({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () => {
    navigation.navigate('PlanetsC', { planet: data, edit: true });
  }

  const deletePlanet = () => {
    PlanetList.removePlanet(data.id);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
      {data ? (
        <View style={styles.containerStuff}>
         {data.image ?
          <Image source={data.image} style={{ width: 280, height: 280, borderRadius: 140 }} />
          : (
            <PlanetMaker primaryColor={data.primaryColor} secondaryColor={data.secondaryColor} />
          ) 
      }
      <View style={styles.titleContainer}> 
      <Text style={{color: `${data.primaryColor}`, fontSize: 25, 
      fontWeight: 'bold', textShadowColor: `${data.secondaryColor}`, textShadowOffset: {width: 1.2, height: 1.2}, textShadowRadius: 1,
    }}>{data.name}</Text>
    <View style={styles.lola}>
    <MaterialCommunityIcons name="account-group" size={24} color={data.primaryColor} />
      <Text style={styles.text}>{data.population}</Text>
      </View>
      </View>
      <View style={styles.resourcesContainer}>
      <View style={styles.definePositions2}>
        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5}}>
      <Fontisto name="sun" size={22} color={data.primaryColor} />
      <Text style={styles.text}>{data.solarSystem}</Text>
      </View>
      <View style={styles.definePositions}>
        <Fontisto name="date" size={22} color={data.primaryColor} />
      <Text style={styles.text}>{data.conquestDate}</Text>
      </View>
      <View style={styles.definePositions}>
      <Fontisto name="electronjs" size={22} color={data.primaryColor} />
      <Text style={styles.text}>{data.galaxy}</Text>
      </View>
      </View>
      </View>
      <Text style={styles.text}>{data.naturalResources}</Text>
      <Text style={styles.text}>{data.humanSettlements}</Text>
      <Text style={styles.text}>{data.spaceCoordinates}</Text>
      <Text style={styles.text}>{data.transmissionFrequency}</Text>
      <Text style={styles.text}>{data.communicationCode}</Text>
      <Text style={styles.text}>{data.ruler}</Text>
      <Text style={styles.text}>{data.title}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={{borderColor: data.primaryColor,  paddingVertical: 10,  paddingHorizontal: 20, borderRadius: 8, borderWidth: 2 }} onPress={editPlanet}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#FF0000', borderColor: '#dc3545', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, borderWidth: 2, }} onPress={deletePlanet}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
      ) : (
        <Text style={styles.textnotfound}>Planeta não encontrado</Text>
      )}
      </ScrollView>
    </View>
  );
}
    