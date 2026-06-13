import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { COLORS, GRID_SIZE, CELL_SIZE, GRID_PADDING, GRID_SKINS } from '../utils/Constants';

const Grid = ({ grid, onCellLayout, skinId = 'slate' }) => {
  const skin = GRID_SKINS[skinId] || GRID_SKINS.slate;

  return (
    <View style={[styles.container, { 
      backgroundColor: skin.backgroundColor,
      borderColor: skin.borderColor
    }]}>
      {grid.map((row, r) => (
        <View key={r} style={styles.row}>
          {row.map((cell, c) => (
            <View
              key={`${r}-${c}`}
              onLayout={(event) => onCellLayout && onCellLayout(r, c, event)}
              style={[
                styles.cell,
                { 
                  backgroundColor: cell || skin.gridColor,
                  borderColor: cell ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                  borderWidth: 1,
                }
              ]}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: GRID_PADDING,
    borderRadius: 8,
    borderWidth: 2,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    margin: 1,
    borderRadius: 4,
  },
});

export default Grid;
