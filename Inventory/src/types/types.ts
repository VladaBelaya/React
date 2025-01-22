export type ItemType = 'potion' | 'armor' | 'sword';
export type RarityType = 'common' | 'rare' | 'epic';

type Size = {
    width: number;
    height: number
}

type Position = {
    x: number;
    y: number
}

export type Item = {
    id: string;
    type: ItemType;
    rarity: RarityType;
    size: Size;
    position: Position;
};

export type Inventory = {
    width: number;
    height: number;
    items: Item[];
};
