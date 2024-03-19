import { View, Text } from 'react-native'
const Title = ({title, color}) => {
  const styles = {
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: color || '#ffff',
    }
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  
  )
 
}

export default Title