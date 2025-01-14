"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadComponent() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield fetch('component.json');
            if (!response.ok) {
                console.log('Ошибка при запросе:', response);
                return;
            }
            const component = yield response.json();
            const element = createElement(component);
            (_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(element);
        }
        catch (error) {
            console.error('Ошибка при загрузке компонента:', error);
        }
    });
}
function createElement(virtualNode) {
    var _a;
    const element = document.createElement(virtualNode.tag);
    for (const [key, value] of Object.entries((_a = virtualNode.attrs) !== null && _a !== void 0 ? _a : {})) {
        element.setAttribute(key, value);
    }
    // Обрабатываем дочерние элементы
    virtualNode.children.forEach(child => {
        if (typeof child === 'string') {
            // Если дочерний элемент - это текст, добавляем его как текстовый узел
            element.appendChild(document.createTextNode(child));
        }
        else {
            // Рекурсивно создаем дочерние элементы
            element.appendChild(createElement(child));
        }
    });
    return element;
}
// Вызываем функцию загрузки компонента
loadComponent();
