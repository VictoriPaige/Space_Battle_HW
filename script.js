//make a ship object? with the overarching properties
//hull, firepowere, accuracy
//use this object to create the alien and hero ships 


//ACTORS
// class hero {
//     constructor(name, hull, firepower, accuracy) {
//         this.name = name;
//         this.hull = hull;
//         this.firepower = firepower;
//         this.accuracy = accuracy; // make accuracy a function?

//     }
// };

// const hero = new Ship('USS_HelloWorld', 20, 5, .7);
// // console.log(hero);


const hero = {
    shipName: 'USS_HelloWorld',
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attack(enemy) {


    }

}





// const alien1 = new Ship('Alien1', ); ///should I make new/from scratch 

class alien {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;

    }

};

console.log(alien);



///ACTIONS!!



function attack() {

    if (Math.random() < this.accuracy) {
        console.log('You have been hit!');
    }
    this.hull -= this.firepower;
    console.log(announceHealth(this.name))
};

function announceHealth() {
    console.log(`I am ${this.name} my shields are now ${this.hull}`)
};