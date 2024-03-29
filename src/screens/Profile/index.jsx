import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'
import Myself from '../../data/Myself'
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons';

export default function Profile() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#000326', '#000439', '#00032F', '#00021E']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.containerView}>
          {
            Myself.map((item, index) => {
              return (
                <View key={index}>
                  <Image source={item.image} style={styles.image} />
                  <Title title={item.name} color={"#88C7F6"} size={30} />
                  <Text style={styles.textsa}>{item.age}</Text>
                  <Text style={styles.texts}>{item.description}</Text>
                  <Text style={styles.texts}>{item.graduate}</Text>
                  {item.contact.map((contact, index) => {
                    return (
                      <View key={index}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 100 }}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL(contact.linkedin)}>
                          <Fontisto name="linkedin" size={24} color="#0077B5" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL(contact.github)}>
                          <Fontisto name="github" size={24} color="#000000" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL(`mailto:${contact.email}`)}>
                          <Fontisto name="email" size={24} color="#FF0000" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL(`https://wa.me/${contact.phone}`)}>
                          <Fontisto name="whatsapp" size={24} color="#25D366" />
                        </TouchableOpacity>

                      </View>
                      </View>
                    )
                  })}
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </LinearGradient>
  )
}