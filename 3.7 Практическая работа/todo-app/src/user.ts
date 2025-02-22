export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface Todo {
  todo: string;
  priority: Priority;
}

export class User {
  name: string;
  status: Status;
  todos: Todo[];

  constructor(name: string) {
    this.name = name;
    this.status = Status.INACTIVE;
    this.todos = [];
  }

  changeStatus(newStatus: Status): void {
    this.status = newStatus;
    console.log(`User status changed to ${newStatus}`);
  }

  addTodo(todoText: string, priority: Priority = Priority.MEDIUM): void {
    const newTodo: Todo = { todo: todoText, priority };
    this.todos.push(newTodo);
    console.log(`Todo added: ${todoText} (Priority: ${priority})`);
  }

  displayTodos(): void {
    console.log(`Todos for ${this.name}:`);
    this.todos.forEach((todo) => {
      console.log(`${todo.todo} (Priority: ${todo.priority})`);
    });
  }

  displayActiveTodos(): void {
    console.log(`Active Todos for ${this.name}:`);
    this.todos
      .filter((todo) => todo.priority !== Priority.HIGH) 
      .forEach((todo) => {
        console.log(`${todo.todo} (Priority: ${todo.priority})`);
      });
  }
}
