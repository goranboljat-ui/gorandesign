export const COLORS = {
  primary: '#4F46E5', // Indigo 600
  secondary: '#10B981', // Emerald 500
  accent: '#F59E0B', // Amber 500
  background: '#0F172A', // Slate 900
  surface: '#1E293B', // Slate 800
  textPrimary: '#F8FAFC', // Slate 50
  textSecondary: '#94A3B8', // Slate 400
  white: '#FFFFFF',
  black: '#000000',
  gridBackground: 'rgba(30, 41, 59, 0.1)', // Slate 800 with 10% opacity
  gridBorder: '#334155', // Slate 700
  emptyCell: 'rgba(30, 41, 59, 0.1)',
};

export const GRID_SIZE = 8;
export const CELL_SIZE = 40;
export const GRID_PADDING = 16;

export const UI_SPECS = {
  cornerRadius: 8,
  blockCornerRadius: 4,
  modalCornerRadius: 24,
};

export const THEMES = {
  classic: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    opacity: 0.9,
  },
  neon: {
    borderRadius: 0,
    borderWidth: 2,
    borderColor: 'currentColor',
    shadowBlur: 4,
    opacity: 1,
  },
  candy: {
    borderRadius: 12,
    borderWidth: 0,
    opacity: 1,
    highlight: true,
  },
  ocean: {
    borderRadius: 8,
    borderWidth: 0,
    opacity: 0.8,
  },
  minimal: {
    borderRadius: 2,
    borderWidth: 0,
    opacity: 1,
  }
};

export const GRID_SKINS = {
  slate: {
    backgroundColor: '#0F172A',
    gridColor: '#1E293B',
    borderColor: '#334155',
  },
  midnight: {
    backgroundColor: '#000000',
    gridColor: 'rgba(79, 70, 229, 0.2)',
    borderColor: '#4F46E5',
  },
  wood: {
    backgroundColor: '#3E2723',
    gridColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: '#5D4037',
  },
  steel: {
    backgroundColor: '#263238',
    gridColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: '#455A64',
  },
  nebula: {
    backgroundColor: '#1A237E',
    gridColor: 'rgba(123, 31, 162, 0.2)',
    borderColor: '#3949AB',
  }
};
