import React from 'react';
import type { Inventory, Item } from '../types/types';

type ItemProps = {
  item: Item;
};

const rarityColors: Record<Item['rarity'], string> = {
  common: 'rgba(82,197,18,0.7)',
  rare: 'rgba(179,80,255,0.65)',
  epic: '#6083ff',
};

export const Item: React.FC<ItemProps> = ({ item }) => {
  const { type, rarity, size, position } = item;

  const itemStyle: React.CSSProperties = {
    position: 'absolute',
    top: `${position.y * 40}px`,
    left: `${position.x * 40}px`,
    width: `${size.width * 40}px`,
    height: `${size.height * 40}px`,
    backgroundColor: rarityColors[rarity],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `4px dotted ${rarityColors[rarity]}`,
    boxSizing: 'border-box',
    borderRadius: '6px',
  };

  const typeIcons: Record<Inventory['type'], string> = {
    potion: 'Лекарство',
    armor: 'Броня',
    sword: 'Меч',
  };

  return (
    <div style={itemStyle} title={`${type} (${rarity})`}>
      {typeIcons[type]}
    </div>
  );
};
