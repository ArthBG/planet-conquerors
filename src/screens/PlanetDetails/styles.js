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
    textD: {
        color: "#fff",
        fontSize: 14,
        margin: 10
    },
    dataText: {
        color: "#DFDFDF",
        backgroundColor: 'rgba(67, 93, 110, 0.30)',
        borderRadius: 10,
        padding: 3,
        fontSize: 14,
        fontWeight: 'bold',
        margin: 5
    },
    textNatural: {
        color: "#fff",
        fontSize: 14,
        margin: 5,
        fontWeight: 'bold'
    },
    textRuler:{ 
      color: "#000",
      fontSize: 18,
      fontWeight: 'bold',

    },
    textnotfound:{
        color: "#fff",
        fontSize: 18,
        paddingLeft: 15,
    },
    lola:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    lola2:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer:{
        backgroundColor: 'rgba(67, 93, 110, 0.25)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        marginTop: 20
    },
    resourcesContainer:{
      backgroundColor: 'rgba(67, 93, 110, 0.20)',
      display: 'flex',
      flexWrap: 'wrap',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      width: '100%',
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
  },
  resourcesContains:{
    backgroundColor: 'rgba(67, 93, 110, 0.20)',
    marginTop: 10,
    borderRadius: 20,
    width: '95%',
    height: 90,
    minHeight: 'fit-content',
    maxHeight: 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
  },
  localContainer:{
    backgroundColor: "rgba(200, 199, 199, 0.15)",
    marginTop: 10,
    flexDirection: 'column',
    borderRadius: 20,
    width: '95%',
    alignItems: 'center',
  },
  containerRuler:{
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    minWidth: '50%',
    minHeight: 'fit-content',
    maxHeight: 'fit-content',
    maxWidth: '95%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  definePositions2:{
    display: 'flex',
    flexDirection: 'row',
  },
  definePositions:{ 
    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
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