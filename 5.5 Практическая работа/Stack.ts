class Stack<T> {
    private elements: T[] = [];

    // Push an element onto the stack
    push(element: T): void {
        this.elements.push(element);
    }

    // Pop the top element from the stack
    pop(): T | undefined {
        return this.elements.pop();
    }

    // Peek at the top element without removing it
    peek(): T | undefined {
        return this.elements[this.elements.length - 1];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    // Get the number of elements in the stack
    size(): number {
        return this.elements.length;
    }
}

export default Stack;