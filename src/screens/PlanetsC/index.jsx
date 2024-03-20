//Cadastro dos planetas
import React from 'react'
import { View, Text, useState } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../components/Title'
import Inputtext from '../../components/Inputtext';
import PlanetForm from '../../components/PlanetForm';
import PlanetItem from '../../components/PlanetItem';
import Planet from '../../data';

export default function PlanetsC() {
    // <Text>{planet.name}</Text>
    // <Text>{planet.conquestDate}</Text>
    // <Text>{planet.primaryColor}</Text>
    // <Text>{planet.secondaryColor}</Text>
    // <Text>{planet.population}</Text>
    // <Text>{planet.naturalResources}</Text>
    // <Text>{planet.humanSettlements}</Text>
    // <Text>{planet.galaxy}</Text>
    // <Text>{planet.solarSystem}</Text>
    // <Text>{planet.spaceCoordinates}</Text>
    // <Text>{planet.transmissionFrequency}</Text>
    // <Text>{planet.communicationCode}</Text>
    // <Text>{planet.ruler}</Text>
    // <Text>{planet.title}</Text> 
    const [pname, setPname] = useState('');
    const [conquestDate, setConquestdate] = useState('');
    const [primaryColor, setPrimarycolor] = useState('');
}