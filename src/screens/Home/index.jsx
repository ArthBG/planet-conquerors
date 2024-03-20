import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../components/Title'
// import styles from './styles'
export default function Home() {
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
      </View>
        <LinearGradient
    style={styles.containerPlanets}
    colors={['#00065F', '#1C005B']}
    start={{ x: 1, y: 0}}
    end={{ x: 1, y: 1}}>

          <Title title={"Planet1"}  />
          <Title title={"Planet2"} />
          <Title title={"Planet3"} />
          <Title title={"Planet4"} />
          <Title title={"Planet5"} />
          <Title title={"Planet6"} />

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