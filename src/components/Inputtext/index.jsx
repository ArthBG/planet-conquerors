import { View, Text, TextInput } from 'react-native'
import styles from './styles'
const Inputtext = ( { placeholder, value, onChangeText, type } ) => {
    return (
        <View>
            <Text style={styles.title}>{placeholder}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                keyboardType={type}
                
            />
        </View>
    )
}

export default Inputtext;