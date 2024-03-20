import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../components/Title'
// import styles from './styles'
export default function Home() {
  return (
    <LinearGradient
        style={styles.container}
        colors={['#000', '#fff']}
        start={{ x: 1, y: 0}}
        end={{ x: 1, y: 1}}
      >
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Title title="PlanetC" color={"#000"} />
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
    top: 5,
    left: 10,
    padding: 20,
  },
}