import React         from 'react';
import { Inventory } from '../types/types';
import { Item }      from './Item';

type InventoryGridProps = {
  data: Inventory;
};

export const GridInventory: React.FC<InventoryGridProps> = ({ data }) => {
  const { width, height, items } = data;

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${width}, 30px)`,
    gridTemplateRows: `repeat(${height}, 30px)`,
    gap: '2px',
    position: 'relative',
    width: `${width * 30}px`,
    height: `${height * 30}px`,
    border: '3px dotted #ff73fe',
    borderRadius: '6px',
    backgroundColor: '#ff73fe1a',
  };

  return (
    <div style={gridStyle}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
