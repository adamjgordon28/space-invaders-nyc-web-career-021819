class Spaceship {
  constructor(name, crew, phasers, shields, cloaked, warpDrive, phasersCharge, docked){
    this.name = name;
    this.crew = crew;
    this.phasers = 5;
    this.shields = 4;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    if(crew.length > 0){
      this.docked = false;
    }
    else {
      this.docked = true
    }

    this.addCrewToShip()
}



    addCrewToShip(){
      this.crew.forEach((position) => {
        position.currentShip = this
      })
    }






}
