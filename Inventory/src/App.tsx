import { Component } from 'react';

import inventoryData from '/public/data/inventory-1.json';
import { validateInventory } from './validation/validation';
import { Inventory } from './types/types';
import { GridInventory } from './components/Grid';

type AppState = {
    inventory: Inventory | null;
};

export default class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        // Валидация данных при импорте
        const isValid = validateInventory(inventoryData);

        this.state = {
            inventory: isValid ? inventoryData : null,
        };
    }

    render() {
        const { inventory } = this.state;

        return (
            <div>
                {inventory ? (
                    <GridInventory data={inventory} />
                ) : (
                    <p>Инвентарь не прошел валидацию</p>
                )}
            </div>
        );
    }
}
