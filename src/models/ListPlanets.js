import { PlanetsData } from '../data/Planets';
import Planet from './Planet';

class PlanetList {
  constructor() {
    this.planets = [];
  }

  addPlanet(planet) {

    this.planets.push(planet);
  }

  removePlanet(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }

  getPlanets() {
    return this.planets;
  }

  getPlanet(name) {
    return this.planets.find((planet) => planet.name === name);
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
   const planetList = new PlanetList();
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
   planetList.addPlanet(newPlanet);

  export default PlanetList;