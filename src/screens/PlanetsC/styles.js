import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAllS: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20,
    },
    Text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#E9E9E9',
        width: 300,
        height: 40,
        marginBottom: 25,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    inputSelect: {
        backgroundColor: '#E9E9E9',
    },
    button: {
        backgroundColor: '#000436',
        width: 300,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonDate:{
        backgroundColor: '#000',
        width: 200,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },
    buttonText: {
        color: '#E9E9E9',
        fontWeight: 'bold',
    },
});


export default styles;