import { View, Text } from 'react-native'
const Title = ({title, color, size}) => {
  const styles = {
    title: {
      fontSize: size || 20,
      fontWeight: 900,
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