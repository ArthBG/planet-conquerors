import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000111"
    },
    text: {
        color: "#fff",
        fontSize: 18,
        margin: 5
    },
    containerStuff:{
        marginTop: 50,
        marginBottom: 50,
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 5,
      },
      buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      editButton: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
      },
      editButtonText: {
        color: '#fff',
      },
      deleteButton: {
        backgroundColor: '#dc3545',
        borderColor: '#dc3545',
      },
      deleteButtonText: {
        color: '#fff',
      }
    });

export default styles;