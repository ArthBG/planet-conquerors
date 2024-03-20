//Cadastro dos planetas
import React from 'react'
import { View, Text, useState } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../components/Title'
import Inputtext from '../../components/Inputtext';
import PlanetForm from '../../components/PlanetForm';
import PlanetItem from '../../components/PlanetItem';
import PlanetsData from '../../data/Planets';
import Planet from '../../models/Planet';
import PlanetList from '../../models/ListPlanets';

const planetList = new PlanetList();


export default function PlanetsC() {
    const [pname, setPname] = useState('');
    const [conquestDate, setConquestdate] = useState('');
    const [primaryColor, setPrimarycolor] = useState('');
    const [secondaryColor, setSecondarycolor] = useState('');
    const [population, setPopulation] = useState('');
    const [naturalResources, setNaturalresources] = useState('');
    const [humanSettlements, setHumansettlements] = useState('');
    const [galaxy, setGalaxy] = useState('');
    const [solarSystem, setSolarystem] = useState('');
    const [spaceCoordinates, setSpacecoordinates] = useState
    const [transmissionFrequency, setTransmissionfrequency] = useState('');
    const [communicationCode, setCommunicationcode] = useState('');
    const [ruler, setRuler] = useState('');
    const [title, setTitle] = useState('');
    const [planets, setPlanets] = useState(planetList.getPlanets());

    const handleAddPlanet = () => {
        const planet = new Planet(pname, conquestDate, primaryColor, secondaryColor, population, naturalResources, humanSettlements, galaxy, solarSystem, spaceCoordinates, transmissionFrequency, communicationCode, ruler, title);
        planetList.addPlanet(planet);
        setPlanets(planetList.getPlanets());
    }

    const handleRemovePlanet = (id) => {
        planetList.removePlanet(id);
        setPlanets(planetList.getPlanets());
    }

    return (
        <LinearGradient colors={['#000', '#628']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Title title="Cadastro de Planetas" />
            <PlanetForm
                pname={pname}
                setPname={setPname}
                conquestDate={conquestDate}
                setConquestdate={setConquestdate}
                primaryColor={primaryColor}
                setPrimarycolor={setPrimarycolor}
                secondaryColor={secondaryColor}
                setSecondarycolor={setSecondarycolor}
                population={population}
                setPopulation={setPopulation}
                naturalResources={naturalResources}
                setNaturalresources={setNaturalresources}
                humanSettlements={humanSettlements}
                setHumansettlements={setHumansettlements}
                galaxy={galaxy}
                setGalaxy={setGalaxy}
                solarSystem={solarSystem}
                setSolarystem={setSolarystem}
                spaceCoordinates={spaceCoordinates}
                setSpacecoordinates={setSpacecoordinates}
                transmissionFrequency={transmissionFrequency}
                setTransmissionfrequency={setTransmissionfrequency}
                communicationCode={communicationCode}
                setCommunicationcode={setCommunicationcode}
                ruler={ruler}
                setRuler={setRuler}
                title={title}
                setTitle={setTitle}
                handleAddPlanet={handleAddPlanet}
            />
            <View>
                {planets.map((planet) => (
                    <PlanetItem
                        key={planet.id}
                        planet={planet}
                        handleRemovePlanet={handleRemovePlanet}
                    />
                ))}
            </View>
        </LinearGradient>
    )

}


