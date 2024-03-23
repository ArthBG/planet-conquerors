import { PlanetsData } from '../data/Planets';
import Planet from './Planet';

class PlanetLista {
  constructor() {
    this.planets = [];
    const fixedPlanets = PlanetsData.map((planet) => {
      PlanetsData.map((planet) => planet.name),
      PlanetsData.map((planet) => planet.conquestDate),
      PlanetsData.map((planet) => planet.image),
      PlanetsData.map((planet) => planet.primaryColor),
      PlanetsData.map((planet) => planet.secondaryColor),
      PlanetsData.map((planet) => planet.population),
      PlanetsData.map((planet) => planet.naturalResources),
      PlanetsData.map((planet) => planet.humanSettlements),
      PlanetsData.map((planet) => planet.galaxy),
      PlanetsData.map((planet) => planet.solarSystem),
      PlanetsData.map((planet) => planet.spaceCoordinates),
      PlanetsData.map((planet) => planet.transmissionFrequency),
      PlanetsData.map((planet) => planet.communicationCode),
      PlanetsData.map((planet) => planet.ruler),
      PlanetsData.map((planet) => planet.title)
      return new Planet(
        planet.name,
        planet.conquestDate,
        planet.image,
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
      );
      });
      this.planets.push(...fixedPlanets);

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

  export default PlanetList;