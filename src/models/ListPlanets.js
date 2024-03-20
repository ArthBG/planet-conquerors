import Planets from "../data/Planets";
export default class PlanetList {
  constructor() {
    this.planets = [];
  }

  addPlanet(planet) {
    let planets1 = Planets;
    this.planets.push(planets1);
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