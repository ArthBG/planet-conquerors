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

    updatePlanet(planet) {
        this.planets = this.planets.map((planets) => {
            if (planets.id === planet.id) {
                return planet;
            }
            return planets;
        });
    }

  }
  const PlanetList = new PlanetLista();
     const newPlanet = new Planet(
       PlanetsData.name,
       PlanetsData.conquestDate,
       PlanetsData.primaryColor,
       PlanetsData.secondaryColor,
       PlanetsData.population,
       PlanetsData.naturalResources,
       PlanetsData.humanSettlements,
       PlanetsData.galaxy,
       PlanetsData.solarSystem,
       PlanetsData.spaceCoordinates,
       PlanetsData.transmissionFrequency,
       PlanetsData.communicationCode,
       PlanetsData.ruler,
       PlanetsData.title
       );
       PlanetList.addPlanet(newPlanet);

  export default PlanetList;