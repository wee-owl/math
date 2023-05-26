import Magician from '../magicianDamage';

test.each([
  {
    attack: 110, distance: 11, stone: true, expected: 0,
  },
  {
    attack: 110, distance: 11, stone: false, expected: 0,
  },
  {
    attack: 100, distance: 9, stone: true, expected: 4,
  },
  {
    attack: 100, distance: 9, stone: false, expected: 20,
  },
  {
    attack: 90, distance: 5, stone: true, expected: 42,
  },
  {
    attack: 90, distance: 5, stone: false, expected: 54,
  },
  {
    attack: 40, distance: 2, stone: true, expected: 31,
  },
  {
    attack: 40, distance: 2, stone: false, expected: 36,
  },
  {
    attack: 10, distance: 1, stone: true, expected: 10,
  },
  {
    attack: 10, distance: 1, stone: false, expected: 10,
  },
  {
    attack: 1, distance: 10, stone: false, expected: 0,
  },
])(
  'check Magician for attack %s with distance %s',
  ({
    attack, distance, stone, expected,
  }) => {
    const result = new Magician(attack, distance);
    result.stoned = stone;
    expect(result.attack).toBe(expected);
  },
);
