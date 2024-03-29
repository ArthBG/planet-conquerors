import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title'
import PlanetList from '../../models/ListPlanets'
import styles from './styles'
import PlanetMaker from '../../components/PlanetMaker';
import { Feather, MaterialCommunityIcons, Fontisto, FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';
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
            <PlanetMaker primaryColor={data.primaryColor} secondaryColor={data.secondaryColor} lockit={"yes"} />
          ) 
      }
      <View style={styles.titleContainer}> 
      <Text style={{color: `${data.primaryColor}`, fontSize: 25, 
      fontWeight: 'bold'
    }}>{data.name}</Text>
    <View style={styles.lola}>
    <MaterialCommunityIcons name="account-group" size={24} color={data.primaryColor} />
      <Text style={styles.text}>{data.population}</Text>
      </View>
      </View>
      <View style={styles.resourcesContainer}>
      <View style={styles.definePositions2}>
        <View style={styles.definePositions}>
      <FontAwesome name="sun-o" size={22} color={data.primaryColor} />
      <Text style={styles.textD}>{data.solarSystem}</Text>
      </View>
      <View style={styles.definePositions}>
        <Fontisto name="date" size={22} color={data.secondaryColor} />
      <Text style={styles.dataText}>{data.conquestDate}</Text>
      </View>
      <View style={styles.definePositions}>
      <Fontisto name="electronjs" size={22} color={data.primaryColor} />
      <Text style={styles.textD}>{data.galaxy}</Text>
      </View>
      </View>
      </View>
      <View style={styles.resourcesContains}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 3, backgroundColor: 'rgba(67, 93, 110, 0.10)', borderRadius: 10}}> 
      <MaterialCommunityIcons name="water" size={35} color='blue' />
      <MaterialCommunityIcons name="fire" size={30} color='red' />
      <MaterialCommunityIcons name="leaf" size={26} color='green' />
      <MaterialCommunityIcons name="snowflake" size={26} color='lightblue' />
      </View>
      <Text style={styles.textNatural}>{data.naturalResources}</Text>
      </View>
      <View style={styles.resourcesContains}>
      <Title title="Acomodamento de Humanos" />
      <Text style={styles.text}>{data.humanSettlements}</Text>
      </View>
      <View style={styles.localContainer}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
        <Ionicons name="location" size={30} color={data.primaryColor} />
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.lola2}>
      <Title title="Coordenadas Espaciais" size={18} />
      <Text style={styles.text}>{data.spaceCoordinates}</Text>
      </View>
      <View style={styles.lola2}>
      <Title title="Frequência de Transmissão" size={18} />
      <Text style={styles.text}>{data.transmissionFrequency}</Text>
      </View>
      <View style={styles.lola2}>
      <Title title="Código de Comunicação" size={18} />
      <Text style={styles.text}>{data.communicationCode}</Text>
      </View>
      </View>
      </View>
      <View style={styles.containerRuler}>
       <Title title={`Governante do planeta ${data.name}`}  size={21} color={'#000'} /> 
       <View style={styles.lola}>
      <FontAwesome5 name="crown" size={30} color={'#F1B619'} />
      <Text style={styles.textRuler}>{data.title} {data.ruler}</Text>
      </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={{backgroundColor: '#007BFF', borderColor: '#007BFF',borderColor: data.primaryColor,  paddingVertical: 10,  paddingHorizontal: 20, borderRadius: 8, borderWidth: 2 }} onPress={editPlanet}>
          <Feather name="edit" size={20} color={data.primaryColor} />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#FF0000', borderColor: '#dc3545', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, borderWidth: 2, }} onPress={deletePlanet}>
          <FontAwesome name="trash" size={20} color="#fff" />
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
    