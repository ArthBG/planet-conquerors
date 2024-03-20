//Cadastro dos planetas
import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../components/Title'
import Planet from '../../models/Planet';
import PlanetList from '../../models/ListPlanets';
import { PlanetsData } from "../../data/Planets"

const planetList = new PlanetList();
 const planetData = PlanetsData.map((planet) => {
     const planetsmocked = new Planet(
         planet.name,
         planet.conquestDate,
         planet.primaryColor,
         planet.secondaryColor,
         planet.population,
         planet.naturalResources,
         planet.humanSettlements,
         planet.galaxy,
         planet.solarSystem,
         planet.spaceCoordinates,
         planet.transmissionFrequency,
         planet.communicationCode,
         planet.ruler,
         planet.title
     )
     planetList.addPlanet(planetsmocked);
     }
 );




export default function PlanetsC() {
    const [planetData, setplanetData]
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

    const handleAddPlanet = () => {
        const planet = new Planet(
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
        planetList.addPlanet(planet);
        setPlanets(planetList.getPlanets());
    }

    // const handleRemovePlanet = (id) => {
    //     planetList.removePlanet(id);
    //     setPlanets(planetList.getPlanets());
    // }

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
        <LinearGradient colors={['#000', '#628']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                <Text style={styles.buttonText}>Adicionar Planeta</Text>
            </TouchableOpacity>
            <View>
                <Text>Planetas Cadastrados</Text>
                {/* {planets.map((planet) => (
                    <View key={planet.id}>
                        <Text>{planet.name}</Text>
                        <TouchableOpacity onPress={() => handleRemovePlanet(planet.id)}>
                            <Text>Remover</Text>
                        </TouchableOpacity>
                    </View>
                ))} */}
            </View>
        </LinearGradient>
    );

}



