export const generateRandomTiles = () => {
  const notShuffled = [
    'A',
    'A',
    'B',
    'B',
    'C',
    'C',
    'D',
    'D',
    'E',
    'E',
    'F',
    'F',
    'G',
    'G',
    'H',
    'H',
  ];
  const shuffled = {};
  let remaining = 16;
  for (let i = 0; i < 16; i++) {
    shuffled[i] = {
      id: i,
      state: 'hidden',
      letter: notShuffled.splice(Math.floor(Math.random() * remaining), 1)[0],
    };
    remaining -= 1;
  }
  return shuffled;
};
