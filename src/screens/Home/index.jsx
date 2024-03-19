import { View, Text } from 'react-native'
import Title from '../../components/Title'
// import styles from './styles'
export default function Home() {
  return (
    <View style={styles.container}>
        <Title title="Home" />
        <Text>Home Screen</Text>
    </View>
  )

}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f23f',
  },
}