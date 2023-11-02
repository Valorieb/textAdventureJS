class Player {
  constructor() {
    this.hitPoints = 100; // Initial hit points
  }

  takeDamage(damage) {
    this.hitPoints -= damage;
  }

  heal(healing) {
    this.hitPoints += healing;
  }
}

export default Player;
