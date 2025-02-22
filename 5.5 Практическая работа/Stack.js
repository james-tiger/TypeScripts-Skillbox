"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    // Push an element onto the stack
    Stack.prototype.push = function (element) {
        this.elements.push(element);
    };
    // Pop the top element from the stack
    Stack.prototype.pop = function () {
        return this.elements.pop();
    };
    // Peek at the top element without removing it
    Stack.prototype.peek = function () {
        return this.elements[this.elements.length - 1];
    };
    // Check if the stack is empty
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    // Get the number of elements in the stack
    Stack.prototype.size = function () {
        return this.elements.length;
    };
    return Stack;
}());
exports.default = Stack;
