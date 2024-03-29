import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
      scrollViewContainer: {
        flex: 1,
        minHeight: '100%',  
      },
      container2: {
        marginTop: 20,
        marginBottom: 20,
      },
      containerText: {
        alignItems: 'center',
        marginBottom: 170,
        marginTop: 220,
        justifyContent: 'center',
    
      },
      containerTexts: {
        marginLeft: 20,
      },
      backgroundw: {
        width: '100%',
        backgroundColor: '#000326',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      subtitle: {
        color: '#F7F7F7',
        marginTop: 20,
        fontSize: 12,
        width: 200,
      },
      containerPlanets: {
        height: 'fit-content',
      },
      containerPlanetsList: {
        marginTop: 1,
        alignItems: 'center',
      },
      planet: {
        backgroundColor: '#000538',
        borderRadius: 10,
        width: 230,
        height: 200,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        allignSelf: 'center',
      },
      planetName: {
        color: '#fff',
        fontSize: 20,
        marginTop: 10,
      },
      planetImage: {
        width: 110,
        height: 110,
        borderRadius: 140,
      }
    });

export default styles;