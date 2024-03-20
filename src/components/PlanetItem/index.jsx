import React from 'react';
import { View, Text, Image } from 'react-native';

const PlanetItem = ({ planet }) => {
  return (
    <View>
      <Text>{planet.name}</Text>
      <Text>{planet.conquestDate}</Text>
      <Image source={planet.image} />
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
    </View>
  );
};

export default PlanetItem;