class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    if (this.currentShip != "Looking for a Rig" &&  this.position === "Pilot") {
      this.currentShip.warpDrive = "engaged"
      return this.currentShip.warpDrive
    }
    else {
      return "had no effect"
    }
  }

  setsInvisibility() {
    if (this.currentShip != "Looking for a Rig" &&
      this.position === "Defender") {
      this.currentShip.cloaked = true
      return this.currentShip.cloaked
    }
    else {
      return "had no effect"
    }
  }

  chargePhasers() {
    if (this.currentShip != "Looking for a Rig" && this.position === "Gunner") {
      this.currentShip.phasersCharge = "charged"
      return this.currentShip.phasersCharge
    }
    else {
      return "had no effect"
    }
  }
}
