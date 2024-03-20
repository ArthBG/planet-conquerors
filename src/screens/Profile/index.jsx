import { View, Text, Image } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'
import Myself from '../../data/Myself'
export default function Profile() {
  return (
    <View style={styles.container}>
        {
          Myself.map((item, index) => {
            return (
              <View key={index}>
                <Image source={item.image} style={styles.image} />
                <Title title={item.name} color={"#000"} />
                <Text>{item.age}</Text>
                <Text>{item.description}</Text>
                <Text>{item.graduate}</Text>
                <Text>{item.email}</Text>
              </View>
            )
          })
        }
    </View>
  )
}