import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Selection } from 'react-native';

const PlanetForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [conquestDate, setConquestDate] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [population, setPopulation] = useState('');
  const [naturalResources, setNaturalResources] = useState('');
  const [humanSettlements, setHumanSettlements] = useState('');
  const [galaxy, setGalaxy] = useState('');
  const [solarSystem, setSolarSystem] = useState('');
  const [spaceCoordinates, setSpaceCoordinates] = useState('');
  const [transmissionFrequency, setTransmissionFrequency] = useState('');
  const [communicationCode, setCommunicationCode] = useState('');
  const [ruler, setRuler] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    onSubmit({
      name,
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
      title,
    });
    setName('');
    setConquestDate('');
    setPrimaryColor('');
    setSecondaryColor('');
    setPopulation('');
    setNaturalResources('');
    setHumanSettlements('');
    setGalaxy('');
    setSolarSystem('');
    setSpaceCoordinates('');
    setTransmissionFrequency('');
    setCommunicationCode('');
    setRuler('');
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <Text>Nome do Planeta</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text>Data de Conquista</Text>
      <TextInput
        style={styles.input}
        value={conquestDate}
        onChangeText={setConquestDate}
      />
      <Text>Cor Primária</Text>
      <Selection
        style={styles.input}
        value={primaryColor}
        onChangeText={setPrimaryColor}
      />
      <Text>Cor Secundária</Text>
      <TextInput
        style={styles.input}
        value={secondaryColor}
        onChangeText={setSecondaryColor}
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
        onChangeText={setNaturalResources}
      />
      <Text>Número de Assentamentos Humanos</Text>
      <TextInput
        style={styles.input}
        value={humanSettlements}
        onChangeText={setHumanSettlements}
        />
    <Text>Cor Primária</Text>
        <Selection
        style={styles.input}
        value={primaryColor}
        onChangeText={setPrimaryColor}
        />
        <Text>Cor Secundária</Text>
        <Selection
        style={styles.input}
        value={secondaryColor}
        onChangeText={setSecondaryColor}
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
        onChangeText={setNaturalResources}
      />
      <Text>Número de Assentamentos Humanos</Text>
      <TextInput
        style={styles.input}
        value={humanSettlements}
        onChangeText={setHumanSettlements}
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
        onChangeText={setSolarSystem}
      />
      <Text>Coordenadas Espaciais</Text>
      <TextInput
        style={styles.input}
        value={spaceCoordinates}
        onChangeText={setSpaceCoordinates}
      />
      <Text>Frequência de Transmissão</Text>
      <TextInput
        style={styles.input}
        value={transmissionFrequency}
        onChangeText={setTransmissionFrequency}
      />
      <Text>Codificação de Comunicação</Text>
      <TextInput
        style={styles.input}
        value={communicationCode}
        onChangeText={setCommunicationCode}
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
      <Button title="Cadastrar Planeta" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default PlanetForm;