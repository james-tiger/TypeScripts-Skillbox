// src/main.ts
import { User } from './task_1';
import { AdminUser } from './task_2';

// Test code for task_1.ts
const user = new User("John", "Doe", 25);
console.log("User Age (initial):", user.getAge()); // 25
user.setAge(30);
console.log("User Age (updated):", user.getAge()); // 30

// Test code for task_2.ts
const admin = new AdminUser(1, "Alice", true, "Admin", "alice@example.com", "1234567890");
console.log("Admin Status:", admin.getStatus()); // Active
console.log("Admin Role:", admin.role); // Admin