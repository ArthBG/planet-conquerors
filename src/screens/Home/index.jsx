import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Title from '../../components/Title'
// import styles from './styles'
export default function Home() {
  return (
    <LinearGradient colors={['#000000', '#434343']} style={styles.container}>
      <View style={styles.containerText}>
        <Title title="PlanetC" color={"#000"} />
      </View>
        <Text>Home Screen</Text>
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