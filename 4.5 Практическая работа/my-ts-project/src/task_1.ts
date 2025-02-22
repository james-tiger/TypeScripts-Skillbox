// src/lesson_1.ts
export class User {
    private static userName: string;
    private surname: string;
    protected age: number;
  
    constructor(userName: string, surname: string, age: number) {
      User.userName = userName;
      this.surname = surname;
      this.age = age;
    }
  
    public setAge(age: number) {
      this.age = age;
    }
  
    public getAge() {
      return this.age;
    }
  }