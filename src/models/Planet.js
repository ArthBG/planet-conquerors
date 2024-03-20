export default class Planet {
  constructor(name, conquestDate, image, primaryColor, secondaryColor, population, naturalResources, humanSettlements, galaxy, solarSystem, spaceCoordinates, transmissionFrequency, communicationCode, ruler, title, id) {
    this.name = name;
    this.conquestDate = conquestDate;
    this.image = image;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
    this.population = population;
    this.naturalResources = naturalResources;
    this.humanSettlements = humanSettlements;
    this.galaxy = galaxy;
    this.solarSystem = solarSystem;
    this.spaceCoordinates = spaceCoordinates;
    this.transmissionFrequency = transmissionFrequency;
    this.communicationCode = communicationCode;
    this.ruler = ruler;
    this.title = title;
    this.id = this.generateId();
  }
    generateId() {
        return Math.floor(Math.random() * 100000);
    }
}