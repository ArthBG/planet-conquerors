import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        minHeight: '100%',  
      },
    container: {
        flex: 1,
        textAlign: 'center',
    },
    containerView: {
        margin: 5,
        padding: 5,
    },
    textsa:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0077B5',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 50,
        alignSelf: 'center',
        margin: 20,
        borderColor: '#001f3f',
        borderWidth: 5
    },
    texts:{
        color: '#fff',
        fontSize: 20,
        marginTop: 10,

    },
    buttonContainer: {
        margin: 10,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
    });

export default styles;