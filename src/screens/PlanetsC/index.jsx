//Cadastro dos planetas
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title'
import Planet from '../../models/Planet';
import PlanetList from '../../models/ListPlanets';
// import PlanetsData from '../../data/Planets';


const planetList = new PlanetList();

// PlanetsData.map((planet) => {
//     const planetdata = new Planet(
//         planet.name,
//         planet.conquestDate,
//         planet.primaryColor,
//         planet.secondaryColor,
//         planet.population,
//         planet.naturalResources,
//         planet.humanSettlements,
//         planet.galaxy,
//         planet.solarSystem,
//         planet.spaceCoordinates,
//         planet.transmissionFrequency,
//         planet.communicationCode,
//         planet.ruler,
//         planet.title
//     )
//     planetList.addPlanet(planetdata);
// });







export default function PlanetsC({ route }) {
    let { planet, edit } = route.params;

    const navigation = useNavigation();
    const [isUpdate, setIsUpdate] = useState(edit);
    const [pname, setPname] = useState('');
    const [conquestDate, setConquestdate] = useState('');
    const [primaryColor, setPrimarycolor] = useState('');
    const [secondaryColor, setSecondarycolor] = useState('');
    const [population, setPopulation] = useState('');
    const [naturalResources, setNaturalresources] = useState('');
    const [humanSettlements, setHumansettlements] = useState('');
    const [galaxy, setGalaxy] = useState('');
    const [solarSystem, setSolarsystem] = useState('');
    const [spaceCoordinates, setSpacecoordinates] = useState('');
    const [transmissionFrequency, setTransmissionfrequency] = useState('');
    const [communicationCode, setCommunicationcode] = useState('');
    const [ruler, setRuler] = useState('');
    const [title, setTitle] = useState('');
    const [planets, setPlanets] = useState(planetList.planets);

    useEffect(() => {
        if (edit) {
            setPname(planet.name);
            setConquestdate(planet.conquestDate);
            setPrimarycolor(planet.primaryColor);
            setSecondarycolor(planet.secondaryColor);
            setPopulation(planet.population);
            setNaturalresources(planet.naturalResources);
            setHumansettlements(planet.humanSettlements);
            setGalaxy(planet.galaxy);
            setSolarsystem(planet.solarSystem);
            setSpacecoordinates(planet.spaceCoordinates);
            setTransmissionfrequency(planet.transmissionFrequency);
            setCommunicationcode(planet.communicationCode);
            setRuler(planet.ruler);
            setTitle(planet.title);
            setIsUpdate(true);
        } else {
            clearFields();
        }
    }, [planets, edit]);

    const clearFields = () => {
        setIsUpdate(false);
        edit = false;
        setPname('');
        setConquestdate('');
        setPrimarycolor('');
        setSecondarycolor('');
        setPopulation('');
        setNaturalresources('');
        setHumansettlements('');
        setGalaxy('');
        setSolarsystem('');
        setSpacecoordinates('');
        setTransmissionfrequency('');
        setCommunicationcode('');
        setRuler('');
        setTitle('');
    }

    const handleAddPlanet = () => {
        if (isUpdate) {
            const newPlanet = new Planet(
                pname,
                conquestDate,
                primaryColor,
                secondaryColor,
                population,
                naturalResources,
                humanSettlements,
                galaxy,
                solarSystem,
                spaceCoordinates,
                transmissionFrequency,
                communicationCode,
                ruler,
                title
            );
            planetList.updatePlanet(newPlanet);
        } else {
            const newPlanet = new Planet(
                pname,
                conquestDate,
                primaryColor,
                secondaryColor,
                population,
                naturalResources,
                humanSettlements,
                galaxy,
                solarSystem,
                spaceCoordinates,
                transmissionFrequency,
                communicationCode,
                ruler,
                title
            );
            planetList.addPlanet(newPlanet);
        }
        setPlanets(planetList.getPlanets());
        navigation.navigate('Home');
        clearFields();
    }

    const styles = {
        input: {
            backgroundColor: '#fff',
            width: 300,
            height: 40,
            marginBottom: 10,
            borderRadius: 8,
            paddingHorizontal: 10,
        },
        button: {
            backgroundColor: '#ff0',
            width: 300,
            height: 40,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        },
        buttonText: {
            color: '#000',
            fontWeight: 'bold',
        },
    }
    return (
        <LinearGradient colors={['#fff', '#628']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView>
            <Title title="Cadastro de Planetas" />
            <View>
                <Text>Planetas Cadastrados</Text>
                {/* {planets.map((planet, index) => (
                    <View key={index}>
                        <Text>{planet.name}</Text>
                        <Text>{planet.conquestDate}</Text>
                        <Text>{planet.primaryColor}</Text>
                        <Text>{planet.secondaryColor}</Text>
                        <Text>{planet.population}</Text>
                        <Text>{planet.naturalResources}</Text>
                        <Text>{planet.humanSettlements}</Text>
                        <Text>{planet.galaxy}</Text>
                        <Text>{planet.solarSystem}</Text>
                        <Text>{planet.spaceCoordinates}</Text>
                        <Text>{planet.transmissionFrequency}</Text>
                        <Text>{planet.communicationCode}</Text>
                        <Text>{planet.ruler}</Text>
                        <Text>{planet.title}</Text>
                        <TouchableOpacity onPress={() => handleRemovePlanet(planet.id)}>
                            <Text>Remover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => editPlanet(planet.id)}>
                            <Text>Editar</Text>
                        </TouchableOpacity>
                        </View>
                ))} */}
            </View>
            <Text>Nome do Planeta</Text>
            <TextInput
                style={styles.input}
                value={pname}
                onChangeText={setPname}
            />
            <Text>Data de Conquista</Text>
            <TextInput
                style={styles.input}
                value={conquestDate}
                onChangeText={setConquestdate}
            />
            <Text>Cor Primária</Text>
            <TextInput
                style={styles.input}
                value={primaryColor}
                onChangeText={setPrimarycolor}
            />
            <Text>Cor Secundária</Text>
            <TextInput
                style={styles.input}
                value={secondaryColor}
                onChangeText={setSecondarycolor}
            />
            <Text>População</Text>
            <TextInput
                style={styles.input}
                value={population}
                onChangeText={setPopulation}
            />
            <Text>Recursos Naturais</Text>
            <TextInput
                style={styles.input}
                value={naturalResources}
                onChangeText={setNaturalresources}
            />
            <Text>Número de Assentamentos Humanos</Text>
            <TextInput
                style={styles.input}
                value={humanSettlements}
                onChangeText={setHumansettlements}
            />
            <Text>Galáxia</Text>
            <TextInput
                style={styles.input}
                value={galaxy}
                onChangeText={setGalaxy}
            />
            <Text>Sistema Solar</Text>
            <TextInput
                style={styles.input}
                value={solarSystem}
                onChangeText={setSolarsystem}
            />
            <Text>Coordenadas Espaciais</Text>
            <TextInput
                style={styles.input}
                value={spaceCoordinates}
                onChangeText={setSpacecoordinates}
            />
            <Text>Frequência de Transmissão</Text>
            <TextInput
                style={styles.input}
                value={transmissionFrequency}
                onChangeText={setTransmissionfrequency}
            />
            <Text>Codificação de Comunicação</Text>
            <TextInput
                style={styles.input}
                value={communicationCode}
                onChangeText={setCommunicationcode}
            />
            <Text>Governante do Planeta</Text>
            <TextInput
                style={styles.input}
                value={ruler}
                onChangeText={setRuler}
            />
            <Text>Título do Governante</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddPlanet}>
                <Text style={styles.buttonText}>{isUpdate ? 'Editar' : 'Cadastrar'}
                </Text>
            </TouchableOpacity>
            {isUpdate && (
                <TouchableOpacity style={styles.button} onPress={clearFields}>
                    <Text style={styles.buttonText}>Cancelar Alterações</Text>
                </TouchableOpacity>
            )}
           
            </ScrollView>
        </LinearGradient>
    );

}



