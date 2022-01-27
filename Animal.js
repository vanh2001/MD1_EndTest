class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight){
        this.weight = weight;
    }
    toString(){
        return 'Tên: ' + this.name + ", cân nặng: " + this.weight;
    }
}
let objAnimal1 = new Animal('Elephant', 45.6);
alert(objAnimal1.toString());
let objAnimal2 = new Animal('Elephant2', 30.7);
objAnimal2.setName('Mouse');
objAnimal2.setWeight(34.8);
alert(objAnimal2.toString());