import { concatination } from "./concatenation";
const input = document.querySelector('input');
const button = document.querySelector('button');
if (button && input) {
    button.addEventListener('click', () => {
        concatination(input.value, 'hello!');
    });
}
//# sourceMappingURL=index.js.map