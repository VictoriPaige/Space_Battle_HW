//make a ship object? with the overarching properties 
//Prperties: hull, firepower, accuracy
//use this object to create the alien and hero ships <---yes, but alien and hero property values differ greatly, so I decided to make them seperate objects instead


//ACTORS: 

//   This was the general ship class code!
//              ||||||||
//              vvvvvvvv
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
//      ^^^^^^^^^ I decided to not use since there is only ONE hero ^^^^^^^^^



const hero = {
    shipName: 'USS_HelloWorld',
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attack(target) {
        if (Math.random() < this.accuracy) {
            target.hull -= this.firepower;
            console.log(`The ${target.name} has been hit and now has a life hull of ${target.hull}!`)
        } else {
            console.log(`The attack missed ${target.name}. They still have a life hull of ${target.hull}!`)
        }
    }

}


class alien {
    constructor(name) {
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
        this.isAlive = true;
        attack(target) //  <------- is this function global?
            {
                if (Math.random() < this.accuracy) {
                    target.hull -= this.firepower;
                    console.log(`The ${target.name} has been hit and now has a life hull of ${target.hull}!`)
                } else {
                    console.log(`The attack missed ${target.name}. They still have a life hull of ${target.hull}!`)
                }
            }
    }

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