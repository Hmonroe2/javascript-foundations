var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name
    this.wantsToBuildASnowman = true
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }

  }
  gatherMaterials(name, amount) {
    this.materials[name] += amount
  }
  buildASnowman(){
    var snowman = new Snowman(this.materials)
    return snowman
  }
  placeMagicHat(){
    var snowman = this.buildASnowman()
    return snowman.canWearMagicHat() ? `Woah, this snowman is coming to life!`:`I guess I didn't build it correctly.`
  }
}

module.exports = Human;
