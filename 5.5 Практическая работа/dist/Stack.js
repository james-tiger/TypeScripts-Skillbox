"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.elements = [];
    }
    // Push an element onto the stack
    push(element) {
        this.elements.push(element);
    }
    // Pop the top element from the stack
    pop() {
        return this.elements.pop();
    }
    // Peek at the top element without removing it
    peek() {
        return this.elements[this.elements.length - 1];
    }
    // Check if the stack is empty
    isEmpty() {
        return this.elements.length === 0;
    }
    // Get the number of elements in the stack
    size() {
        return this.elements.length;
    }
}
exports.default = Stack;
