type Component = {
    tag: string;
    attrs: { [key: string]: string };
    children: (string | Component)[];
}

async function loadComponent() {
    try {
        const response = await fetch('component.json');

        if (!response.ok) {
            console.log('Ошибка при запросе:', response);
            return;
        }

        const component: Component = await response.json();
        const element = createElement(component);
        
        document.getElementById('app')?.appendChild(element);
    } catch (error) {
        console.error('Ошибка при загрузке компонента:', error);
    }
}

function createElement(virtualNode: Component): HTMLElement {
    const element = document.createElement(virtualNode.tag);

    for (const [key, value] of Object.entries(virtualNode.attrs ?? {})) {
        element.setAttribute(key, value);
    }

    // Обрабатываем дочерние элементы
    virtualNode.children.forEach(child => {
        if (typeof child === 'string') {
            // Если дочерний элемент - это текст, добавляем его как текстовый узел
            element.appendChild(document.createTextNode(child));
        } else {
            // Рекурсивно создаем дочерние элементы
            element.appendChild(createElement(child));
        }
    });

    return element;
}

// Вызываем функцию загрузки компонента
loadComponent();

