export class Stylo {
    constructor(type, color, brand) {
        this.type = type;
        this.color = color;
        this.brand = brand;
    }

    writing(){
        return `J'écris avec un stylo ${this.type} ${this.color} de marque ${this.brand}`
    }
}