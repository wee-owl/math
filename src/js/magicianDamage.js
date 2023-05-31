import AttackTypes from './attackTypes';

export default class Magician extends AttackTypes {
}

// export default class Magician {
//   constructor(attack, distance) {
//     this.attack = attack;
//     this.distance = distance;
//   }

//   get stoned() {
//     return this.stone;
//   }

//   set stoned(boolean) {
//     this.stone = boolean;
//   }

//   get attack() {
//     let fullAttack = Math.round(this.attacks * (1.1 - 0.1 * this.distance));
//     if (this.stone) {
//       fullAttack = Math.round(fullAttack - Math.log2(this.distance) * 5);
//       fullAttack = fullAttack > 0 ? fullAttack : 0;
//     }
//     return fullAttack;
//   }

//   set attack(attack) {
//     this.attacks = attack;
//   }
// }
