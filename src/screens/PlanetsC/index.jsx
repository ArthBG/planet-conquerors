//Cadastro dos planetas
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import ValidateText from '../../components/ValidateText';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title'
import Planet from '../../models/Planet';
import PlanetList from '../../models/ListPlanets';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PlanetsC({ route }) {
    let { planet, edit } = route.params;

    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [validationMsg, setValidationMsg] = useState('');
    const [validationType, setValidationType] = useState('');
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

    const formatDate = (dateF) => {
        const date = new Date(dateF);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
      };

    const onChange = (selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        if(edit == false){
            setDate(currentDate);
        } else {
            setDate(reverseFormatDate(conquestDate));
        }
        setConquestdate(formatDate(currentDate));
        console.log(formatDate(currentDate));

      };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };

      const showDatepicker = () => {
        showMode('date');
      };
      


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
    }, [planet, edit]);

    const clearFields= () => {
       
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
        
        let message = '';
        let type = '';
    
        if (!pname || !primaryColor || !secondaryColor || !population || !naturalResources || !humanSettlements || !galaxy || !solarSystem || !spaceCoordinates || !transmissionFrequency || !communicationCode || !ruler || !title || !conquestDate) {
            message = 'Todos os campos são obrigatórios.';
            type = 'error';
        } else if (!/^\d+\.\d+\.\d+\s.*$/) {
            message = 'A frequência de transmissão deve seguir o padrão "x.xxx.xxx".';
            type = 'error';
        } else if (pname.length > 150) {
            message = 'O nome do planeta deve ter no máximo 150 caracteres.';
            type = 'error';
        } else {
            message = '';
            type = '';
        }
    
        setValidationMessage(message, type);
    
        if (message || type) {
            return;
        }

        if (isUpdate) {
            PlanetList.updatePlanet(planet.id, pname, conquestDate, primaryColor, secondaryColor, population, naturalResources, humanSettlements, galaxy, solarSystem, spaceCoordinates, transmissionFrequency, communicationCode, ruler, title);
            clearFields();
        } else {
            edit = false;
            setIsUpdate(false);
            const newPlanet = new Planet(
                pname,
                conquestDate,
                null,
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

            clearFields();
        }
        navigation.navigate('Home');

    }
    const setValidationMessage = (message, type) => {
        setValidationMsg(message);
        setValidationType(type);
      };



    return (
        <LinearGradient colors={['#FFFFFF', '#FCFCFC']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView>
                <View style={styles.containerAllS}>
            <Title title="Cadastro de Planetas" color={"#000109"}/>
            <Text>Nome do Planeta</Text>
            <TextInput
                style={styles.input}
                value={pname}
                onChangeText={setPname}
            />
            <Text>Data de Conquista</Text>
            <TouchableOpacity style={styles.buttonDate} onPress={showDatepicker}>
                <Text style={styles.buttonText}>Selecionar Data 🗓</Text>
            </TouchableOpacity>
            { isUpdate == true ? <Text>{conquestDate}</Text> :
            <Text>Data Selecionada: {formatDate(date)}</Text> 
            }
      {show && (
        <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={'date'}
            display="default"
            onChange={onChange}
        />

      )}

            { planet.mocked ? null :
            <View>
            <Text>Cor Primária</Text>
            <RNPickerSelect
    style={styles.inputSelect}
    value={primaryColor}
    onValueChange={(value) => setPrimarycolor(value)}
    items={[
        { label: 'Vermelho', value: '#FF0000' },     
        { label: 'Azul', value: '#0000FF' },         
        { label: 'Verde', value: '#008000' },       
        { label: 'Amarelo', value: '#FFFF00' },      
        { label: 'Preto', value: '#000000' },       
        { label: 'Branco', value: '#FFFFFF' },      
        { label: 'Cinza', value: '#808080' },        
        { label: 'Roxo', value: '#800080' },        
        { label: 'Laranja', value: '#FFA500' },  
        { label: 'Marrom', value: '#A52A2A' },       
        { label: 'Rosa', value: '#FFC0CB' },        
        { label: 'Ciano', value: '#00FFFF' },        
        { label: 'Magenta', value: '#FF00FF' },     
        { label: 'Ouro', value: '#FFD700' },         
        { label: 'Prata', value: '#C0C0C0' },       
        { label: 'Bronze', value: '#CD7F32' },      
        { label: 'Cobre', value: '#B87333' },   
        { label: 'Ferro', value: '#43464B' },        
        { label: 'Alumínio', value: '#A9ACB6' },     
        { label: 'Titânio', value: '#708090' },      
        { label: 'Níquel', value: '#A8A878' },       
        { label: 'Zinco', value: '#B5B5B5' },       
        { label: 'Cromo', value: '#8A2BE2' },        
        { label: 'Platina', value: '#E5E4E2' },      
        { label: 'Paládio', value: '#E5E4E2' },      
        { label: 'Ródio', value: '#5F9EA0' },       
        { label: 'Iridium', value: '#BFC1C2' },     
        { label: 'Osmio', value: '#848482' },        
        { label: 'Rênio', value: '#606C66' }         
    ]}
/>
            </View>
}


        {   planet.mocked ? null :
            <View>  
            <Text>Cor Secundária</Text>
            <RNPickerSelect
    style={styles.inputSelect}
    value={secondaryColor}
    onValueChange={(value) => setSecondarycolor(value)}
    items={[
        { label: 'Vermelho', value: '#FF0000' },     
        { label: 'Azul', value: '#0000FF' },         
        { label: 'Verde', value: '#008000' },       
        { label: 'Amarelo', value: '#FFFF00' },      
        { label: 'Preto', value: '#000000' },       
        { label: 'Branco', value: '#FFFFFF' },      
        { label: 'Cinza', value: '#808080' },        
        { label: 'Roxo', value: '#800080' },        
        { label: 'Laranja', value: '#FFA500' },  
        { label: 'Marrom', value: '#A52A2A' },       
        { label: 'Rosa', value: '#FFC0CB' },        
        { label: 'Ciano', value: '#00FFFF' },        
        { label: 'Magenta', value: '#FF00FF' },     
        { label: 'Ouro', value: '#FFD700' },         
        { label: 'Prata', value: '#C0C0C0' },       
        { label: 'Bronze', value: '#CD7F32' },      
        { label: 'Cobre', value: '#B87333' },   
        { label: 'Ferro', value: '#43464B' },        
        { label: 'Alumínio', value: '#A9ACB6' },     
        { label: 'Titânio', value: '#708090' },      
        { label: 'Níquel', value: '#A8A878' },       
        { label: 'Zinco', value: '#B5B5B5' },       
        { label: 'Cromo', value: '#8A2BE2' },        
        { label: 'Platina', value: '#E5E4E2' },      
        { label: 'Paládio', value: '#E5E4E2' },      
        { label: 'Ródio', value: '#5F9EA0' },       
        { label: 'Iridium', value: '#BFC1C2' },     
        { label: 'Osmio', value: '#848482' },        
        { label: 'Rênio', value: '#606C66' }         
    ]}
/>
            </View>
}

            <Text>População</Text>
            <TextInput
                style={styles.input}
                value={population}
                onChangeText={setPopulation}
                keyboardType="numeric"
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
                keyboardType="numeric"
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
                <Text style={styles.buttonText}>{isUpdate ? "Editar" : "Cadastrar"}</Text>
            </TouchableOpacity>
            {isUpdate && (
                <TouchableOpacity style={styles.button} onPress={clearFields}>
                    <Text  style={styles.buttonText}>Cancelar Alterações</Text>
                </TouchableOpacity>
            )}
            <ValidateText Msg={validationMsg} type={validationType} />
        </View>
            </ScrollView>
        </LinearGradient>
    );
}