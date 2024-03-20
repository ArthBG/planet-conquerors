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
        <Text>Home Screen</Text>
        </View>
        </LinearGradient>
  )

}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  containerText: {
    position: 'absolute',
    top: 30,
    left: -150,
    padding: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    width: 300,  
  }
}