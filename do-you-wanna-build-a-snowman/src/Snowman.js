class Snowman {
  constructor(data){
    this.carrots = data.carrots
    this.coal = data.coal
    this.buttons = data.buttons
    this.snowballs = data.snowballs
    this.magicHat = false
  }
  canWearMagicHat(){
    if(this.coal > 1 && this.buttons > 4 && this.carrots > 0 && this.snowballs > 2){
    this.magicHat = true
    return true
  }
  return false
}
}
module.exports = Snowman;
