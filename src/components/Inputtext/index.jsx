import { View, Text } from 'react-native'
import styles from './styles'
const Inputtext = ( { placeholder, value, onChangeText, secureTextEntry } ) => {
    return (
        <View>
            <Text style={styles.title}>{placeholder}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default Inputtext;