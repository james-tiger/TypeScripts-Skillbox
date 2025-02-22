import './style.css';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter';
import typescriptLogo from './typescript.svg';

import { User, Status, Priority } from './user';

const user = new User('John');

user.changeStatus(Status.ACTIVE);

user.addTodo('take delivery', Priority.HIGH);
user.addTodo('stocktaking', Priority.HIGH);
user.addTodo('collect the order');
user.addTodo('throw out the trash', Priority.LOW);

user.displayTodos();

user.displayActiveTodos();

user.changeStatus(Status.INACTIVE);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Todo App</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
