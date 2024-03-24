import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title'
import PlanetList from '../../models/ListPlanets'
import styles from './styles'
import PlanetMaker from '../../components/PlanetMaker';
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

  const renderDate = (date) => {
    if (typeof date !== 'string') {
      date = String(date);
    }
    const dateArray = date.split('/');
    const day = dateArray[0];
    const month = dateArray[1];
    const year = dateArray[2];
    return `${day}/${month}/${year}`;
    
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
      <Text style={{color: `${data.primaryColor}`, fontSize: 25, 
      fontWeight: 'bold', textShadowColor: `${data.secondaryColor}`, textShadowOffset: {width: 1.2, height: 1.2}, textShadowRadius: 1,
    }}>{data.name}</Text>
      <Text style={styles.text}>{renderDate(data.conquestDate)}</Text>
      <Text style={styles.text}>{data.primaryColor}</Text>
      <Text style={styles.text}>{data.secondaryColor}</Text>
      <Text style={styles.text}>{data.population}</Text>
      <Text style={styles.text}>{data.naturalResources}</Text>
      <Text style={styles.text}>{data.humanSettlements}</Text>
      <Text style={styles.text}>{data.galaxy}</Text>
      <Text style={styles.text}>{data.solarSystem}</Text>
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
        <Text style={styles.text}>Planeta não encontrado</Text>
      )}
      </ScrollView>
    </View>
  );
}
    