export const LEVELS = [
  {
    id: 1,
    name: "Getting Started",
    objective: {
      type: 'score',
      target: 200,
    },
    reward: {
      type: 'coins',
      amount: 50,
    },
    stars: [200, 500, 1000],
  },
  {
    id: 2,
    name: "Line Clearer",
    objective: {
      type: 'lines',
      target: 5,
    },
    reward: {
      type: 'coins',
      amount: 100,
    },
    stars: [5, 10, 20],
  },
  {
    id: 3,
    name: "Combo Master",
    objective: {
      type: 'score',
      target: 1000,
    },
    reward: {
      type: 'coins',
      amount: 200,
    },
    stars: [1000, 2000, 5000],
  },
  {
    id: 4,
    name: "The Specialist",
    objective: {
      type: 'lines',
      target: 15,
    },
    reward: {
      type: 'theme',
      id: 'neon',
    },
    stars: [15, 25, 40],
  },
  {
    id: 5,
    name: "Pro Challenge",
    objective: {
      type: 'score',
      target: 5000,
    },
    reward: {
      type: 'coins',
      amount: 500,
    },
    stars: [5000, 8000, 15000],
  },
];
