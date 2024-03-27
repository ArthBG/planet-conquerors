import { PlanetsData } from '../data/Planets';
import Planet from './Planet';

class PlanetLista {
  constructor() {
    this.planets = [];

  }

  addPlanet(planet) {
    this.planets.push(planet);
  }

  removePlanet(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }

  getPlanet(name) {
    return this.planets.find((planet) => planet.name === name);
  }

  getPlanets() {
    return this.planets;
  }

  getPlanetById(id) {
        return this.planets.find((planet) => planet.id === id);
    }

    updatePlanet(id, name, conquestDate, primaryColor, secondaryColor, population, naturalResources, humanSettlements, galaxy, solarSystem, spaceCoordinates, transmissionFrequency, communicationCode, ruler, title) {
      const planet = this.getPlanetById(id);
      if(planet){
        planet.name = name;
        planet.conquestDate = conquestDate;
        planet.primaryColor = primaryColor;
        planet.secondaryColor = secondaryColor;
        planet.population = population;
        planet.naturalResources = naturalResources;
        planet.humanSettlements = humanSettlements;
        planet.galaxy = galaxy;
        planet.solarSystem = solarSystem;
        planet.spaceCoordinates = spaceCoordinates;
        planet.transmissionFrequency = transmissionFrequency;
        planet.communicationCode = communicationCode;
        planet.ruler = ruler;
        planet.title = title;
      }
      return planet;
    }
  }


  const PlanetList = new PlanetLista();
  PlanetsData.map((planet) => {
    const newPlanet = new Planet(planet.name, planet.conquestDate, planet.image, planet.primaryColor, planet.secondaryColor, planet.population, planet.naturalResources, planet.humanSettlements, planet.galaxy, planet.solarSystem, planet.spaceCoordinates, planet.transmissionFrequency, planet.communicationCode, planet.ruler, planet.title, planet.mocked);
    PlanetList.addPlanet(newPlanet);
  }
  );


  export default PlanetList;