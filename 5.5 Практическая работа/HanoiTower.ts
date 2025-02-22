import Stack from './Stack';

function hanoiTower<T>(numDisks: number, source: Stack<T>, target: Stack<T>, auxiliary: Stack<T>): void {
    if (numDisks === 1) {
        // Move the top disk from source to target
        target.push(source.pop()!);
        console.log(`Move disk from ${source} to ${target}`);
        return;
    }

    // Move n-1 disks from source to auxiliary
    hanoiTower(numDisks - 1, source, auxiliary, target);

    // Move the nth disk from source to target
    target.push(source.pop()!);
    console.log(`Move disk from ${source} to ${target}`);

    // Move n-1 disks from auxiliary to target
    hanoiTower(numDisks - 1, auxiliary, target, source);
}

// Example usage
const source = new Stack<number>();
const target = new Stack<number>();
const auxiliary = new Stack<number>();

// Initialize the source stack with disks (e.g., [3, 2, 1])
source.push(3);
source.push(2);
source.push(1);

console.log('Initial state:');
console.log('Source:', source);
console.log('Target:', target);
console.log('Auxiliary:', auxiliary);

hanoiTower(3, source, target, auxiliary);

console.log('Final state:');
console.log('Source:', source);
console.log('Target:', target);
console.log('Auxiliary:', auxiliary);