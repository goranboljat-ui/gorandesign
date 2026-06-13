import { SHAPES, getRandomShapes } from './Shapes';

export class GameEngine {
  constructor(gridSize = 8) {
    this.gridSize = gridSize;
    this.grid = this.createEmptyGrid();
    this.score = 0;
    this.comboCount = 0;
    this.totalLinesCleared = 0;
    this.currentShapes = getRandomShapes(3);
    this.gameOver = false;
  }

  createEmptyGrid() {
    return Array(this.gridSize).fill(null).map(() => Array(this.gridSize).fill(null));
  }

  canPlaceBlock(shapeMatrix, row, col) {
    const shapeHeight = shapeMatrix.length;
    const shapeWidth = shapeMatrix[0].length;

    if (row < 0 || col < 0 || row + shapeHeight > this.gridSize || col + shapeWidth > this.gridSize) {
      return false;
    }

    for (let r = 0; r < shapeHeight; r++) {
      for (let c = 0; c < shapeWidth; c++) {
        if (shapeMatrix[r][c] === 1) {
          if (this.grid[row + r][col + c] !== null) {
            return false;
          }
        }
      }
    }

    return true;
  }

  placeBlock(shape, row, col) {
    if (!this.canPlaceBlock(shape.matrix, row, col)) {
      return false;
    }

    const shapeHeight = shape.matrix.length;
    const shapeWidth = shape.matrix[0].length;
    let specialClearCount = 0;

    for (let r = 0; r < shapeHeight; r++) {
      for (let c = 0; c < shapeWidth; c++) {
        if (shape.matrix[r][c] === 1) {
          const targetRow = row + r;
          const targetCol = col + c;
          
          if (shape.type === 'bomb') {
            specialClearCount += this.triggerBomb(targetRow, targetCol);
          } else if (shape.type === 'lightning-v') {
            specialClearCount += this.triggerLightning(targetRow, targetCol, 'v');
          } else if (shape.type === 'lightning-h') {
            specialClearCount += this.triggerLightning(targetRow, targetCol, 'h');
          } else if (shape.type === 'rainbow') {
            specialClearCount += this.triggerRainbow();
          } else {
            this.grid[targetRow][targetCol] = shape.color;
          }
        }
      }
    }

    // Remove the shape from currentShapes
    this.currentShapes = this.currentShapes.filter(s => s.instanceId !== shape.instanceId);

    // If no more shapes, get new ones
    if (this.currentShapes.length === 0) {
      this.currentShapes = getRandomShapes(3);
    }

    const linesCleared = this.checkLines();
    this.totalLinesCleared += linesCleared;
    const totalCleared = linesCleared + specialClearCount;

    if (totalCleared > 0) {
      this.comboCount += 1;
    } else {
      this.comboCount = 0;
    }

    this.score += this.calculateScore(shape, linesCleared, specialClearCount);

    if (this.isGameOver()) {
      this.gameOver = true;
    }

    return true;
  }

  checkLines() {
    let rowsToClear = [];
    let colsToClear = [];

    // Check rows
    for (let r = 0; r < this.gridSize; r++) {
      if (this.grid[r].every(cell => cell !== null)) {
        rowsToClear.push(r);
      }
    }

    // Check columns
    for (let c = 0; c < this.gridSize; c++) {
      let full = true;
      for (let r = 0; r < this.gridSize; r++) {
        if (this.grid[r][c] === null) {
          full = false;
          break;
        }
      }
      if (full) {
        colsToClear.push(c);
      }
    }

    // Clear rows
    for (let r of rowsToClear) {
      for (let c = 0; c < this.gridSize; c++) {
        this.grid[r][c] = null;
      }
    }

    // Clear columns
    for (let c of colsToClear) {
      for (let r = 0; r < this.gridSize; r++) {
        this.grid[r][c] = null;
      }
    }

    return rowsToClear.length + colsToClear.length;
  }

  triggerBomb(row, col) {
    let cleared = 0;
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (r >= 0 && r < this.gridSize && c >= 0 && c < this.gridSize) {
          if (this.grid[r][c] !== null) {
            this.grid[r][c] = null;
            cleared++;
          }
        }
      }
    }
    return Math.floor(cleared / 3); // Treat every 3 cells as a "line" equivalent for scoring
  }

  triggerLightning(row, col, direction) {
    let cleared = 0;
    if (direction === 'v') {
      for (let r = 0; r < this.gridSize; r++) {
        if (this.grid[r][col] !== null) {
          this.grid[r][col] = null;
          cleared++;
        }
      }
    } else {
      for (let c = 0; c < this.gridSize; c++) {
        if (this.grid[row][c] !== null) {
          this.grid[row][c] = null;
          cleared++;
        }
      }
    }
    return 1; // Treat as 1 line cleared
  }

  triggerRainbow() {
    // Find all unique colors on the grid
    const colors = new Set();
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        if (this.grid[r][c] !== null) {
          colors.add(this.grid[r][c]);
        }
      }
    }

    if (colors.size === 0) return 0;

    // Pick a random color to clear
    const colorArray = Array.from(colors);
    const targetColor = colorArray[Math.floor(Math.random() * colorArray.size)]; // Wait, colors.size is wrong for array index
    
    // Correcting index access
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    let cleared = 0;
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        if (this.grid[r][c] === randomColor) {
          this.grid[r][c] = null;
          cleared++;
        }
      }
    }
    return Math.floor(cleared / 5); // Reward more for clearing many blocks
  }

  calculateScore(shape, linesCleared, specialClearCount) {
    const blockPoints = shape.matrix.flat().filter(cell => cell === 1).length;
    const totalClears = linesCleared + specialClearCount;
    const linePoints = totalClears * 10;
    
    // Combo multiplier: 1x, 2x, 3x...
    const multiplier = Math.max(1, this.comboCount);
    
    return (blockPoints + linePoints) * multiplier;
  }

  isGameOver() {
    // If no current shapes can be placed anywhere, it's game over
    for (const shape of this.currentShapes) {
      for (let r = 0; r <= this.gridSize - shape.matrix.length; r++) {
        for (let c = 0; c <= this.gridSize - shape.matrix[0].length; c++) {
          if (this.canPlaceBlock(shape.matrix, r, c)) {
            return false;
          }
        }
      }
    }
    return true;
  }

  getState() {
    return {
      grid: JSON.parse(JSON.stringify(this.grid)),
      score: this.score,
      comboCount: this.comboCount,
      totalLinesCleared: this.totalLinesCleared,
      currentShapes: this.currentShapes,
      gameOver: this.gameOver,
    };
  }
}
