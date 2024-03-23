//Cadastro dos planetas
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title'
import Planet from '../../models/Planet';
import PlanetList from '../../models/ListPlanets';
import styles from './styles';



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
    const [planets, setPlanets] = useState(PlanetList.planets);

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
            PlanetList.updatePlanet(planet.id, pname, conquestDate, primaryColor, secondaryColor, population, naturalResources, humanSettlements, galaxy, solarSystem, spaceCoordinates, transmissionFrequency, communicationCode, ruler, title);
            clearFields();
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
            PlanetList.addPlanet(newPlanet);

        }
        navigation.navigate('Home');
        clearFields();

    }

    return (
        <LinearGradient colors={['#fff', '#628']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView>
                <View style={styles.containerAllS}>
            <Title title="Cadastro de Planetas" />
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
        </View>
            </ScrollView>
        </LinearGradient>
    );

}


