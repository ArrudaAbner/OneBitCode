const Character = require("./Character");

class Mage extends Character {
  constructor(name, healthPoints, atackPoints, defensePoints, magicPoints) {
    super(name, healthPoints, atackPoints, defensePoints);
    this.magicPoints = magicPoints;
  }

  atackMove(character) {
    character.healthPoints =
      this.atackPoints + this.magicPoints - character.defensePoints;

    console.log(
      `Dano causado: ${
        this.atackPoints + this.magicPoints
      }\n: Vida restante do ${character.name}: ${character.healthPoints}`
    );
  }

  healMove(character) {
    character.healthPoints += this.magicPoints * 2;
  }
}

module.exports = Mage;
