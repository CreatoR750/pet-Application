export interface IAnimal {
    id: number;
    name: string;
    type: string;
    color: string;
    age: number;
    gender: string;
}

export class Animal implements IAnimal {
    public id: number;
    public name: string;
    public type: string;
    public color: string;
    public age: number;
    public gender: string;
    constructor(id: number, name: string, type: string, color: string, age: number, gender: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.color = color;
        this.age = age;
        this.gender = gender;
    }
}
