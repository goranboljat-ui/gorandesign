export const SHAPES = [
  // 1x1
  {
    id: '1x1',
    matrix: [[1]],
    color: '#EF4444', // Red
  },
  // Horizontal lines
  {
    id: '1x2',
    matrix: [[1, 1]],
    color: '#3B82F6', // Blue
  },
  {
    id: '1x3',
    matrix: [[1, 1, 1]],
    color: '#10B981', // Green
  },
  {
    id: '1x4',
    matrix: [[1, 1, 1, 1]],
    color: '#F59E0B', // Yellow
  },
  // Vertical lines
  {
    id: '2x1',
    matrix: [[1], [1]],
    color: '#3B82F6', // Blue
  },
  {
    id: '3x1',
    matrix: [[1], [1], [1]],
    color: '#10B981', // Green
  },
  {
    id: '4x1',
    matrix: [[1], [1], [1], [1]],
    color: '#F59E0B', // Yellow
  },
  // Squares
  {
    id: '2x2',
    matrix: [[1, 1], [1, 1]],
    color: '#8B5CF6', // Purple
  },
  {
    id: '3x3',
    matrix: [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
    color: '#06B6D4', // Cyan
  },
  // L-Shapes (Small)
  {
    id: 'L-small-1',
    matrix: [[1, 0], [1, 1]],
    color: '#EC4899', // Pink
  },
  {
    id: 'L-small-2',
    matrix: [[1, 1], [1, 0]],
    color: '#EC4899',
  },
  {
    id: 'L-small-3',
    matrix: [[0, 1], [1, 1]],
    color: '#EC4899',
  },
  {
    id: 'L-small-4',
    matrix: [[1, 1], [0, 1]],
    color: '#EC4899',
  },
];

export const SPECIAL_SHAPES = [
  {
    id: 'bomb',
    matrix: [[1]],
    color: '#000000',
    type: 'bomb',
  },
  {
    id: 'lightning-v',
    matrix: [[1]],
    color: '#FFEB3B',
    type: 'lightning-v',
  },
  {
    id: 'lightning-h',
    matrix: [[1]],
    color: '#FFEB3B',
    type: 'lightning-h',
  },
  {
    id: 'rainbow',
    matrix: [[1]],
    color: 'rainbow',
    type: 'rainbow',
  },
];

export const getRandomShapes = (count = 3) => {
  const shapes = [];
  for (let i = 0; i < count; i++) {
    const isSpecial = Math.random() < 0.1; // 10% chance for a special block
    const source = isSpecial ? SPECIAL_SHAPES : SHAPES;
    const randomIndex = Math.floor(Math.random() * source.length);
    shapes.push({ ...source[randomIndex], instanceId: Math.random().toString(36).substr(2, 9) });
  }
  return shapes;
};
