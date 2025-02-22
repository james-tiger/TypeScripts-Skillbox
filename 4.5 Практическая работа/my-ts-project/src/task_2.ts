// src/lesson_2.ts
export interface IUser {
    readonly id: number;
    name: string;
    email?: string; // Optional property
    isActive: boolean;
    getStatus(): string;
    phone?: string; // New property
  }
  
  export interface IAdminUser extends IUser {
    role: string; // New property in the extended interface
  }
  
  export class AdminUser implements IAdminUser {
    readonly id: number;
    name: string;
    email?: string;
    isActive: boolean;
    phone?: string;
    role: string;
  
    constructor(id: number, name: string, isActive: boolean, role: string, email?: string, phone?: string) {
      this.id = id;
      this.name = name;
      this.isActive = isActive;
      this.role = role;
      this.email = email;
      this.phone = phone;
    }
  
    getStatus() {
      return this.isActive ? "Active" : "Inactive";
    }
  }