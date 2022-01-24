"use strict"
function Character(name){
    this.name = name;
    this.speed = +((Math.random() * 4 + 1).toFixed(3));

    this.health = 100;
    this.power = +((Math.random() * 9 + 1).toFixed(3)); 
}

const heroes = [];
const villains = [];

for(let i = 0; i < 10; ++i){
    heroes[i] = new Character("hero" + (i+1));
    villains[i] = new Character("villain" + (i+1));
}

function removeDeadCharacter(character){
    let index = heroes.indexOf(character);
    if(index === -1){

        index = villains.indexOf(character);
        villains.splice(index,1);
    }else{
        heroes.splice(index,1);
    }
    console.log(character.name + " dies");
}

function attack(attacker, defender){
    let index;
    let removed = false;
    if( attacker === undefined || attacker.health <= 0){
        removeDeadCharacter(attacker);
        removed = true;
    }
    else if(defender === undefined || defender.health <= 0){
        removeDeadCharacter(attacker);
        removed = true;
    }
    if(!removed){
        let attackInfo = attacker.name + "[" + attacker.health + "] hits " + defender.name + "[" + defender.health + "] with a power of " + attacker.power;
        console.log(attackInfo);
        defender.health -= attacker.power;
    }
}
let count = 0;
function chooseRandomCharacterAndAttac(attacker, whoAttacs){;
 
    if(heroes.length === 0 || villains.length === 0){
        return;
    }
    let defenderIndex;
    let defender;
    if(whoAttacs === "hero"){
        defenderIndex = [Math.floor(Math.random() * villains.length)];
        defender = villains[defenderIndex];
    }else if(whoAttacs === "villain"){
        defenderIndex = [Math.floor(Math.random() * heroes.length)];
        defender = heroes[defenderIndex];
    }
    //console.log("chooseRandomCharacterAndAttac: " + attacker.name + " attac " + defender.name );
    count++;
    attack(attacker, defender);
}

function printWinnerInfo(winner){
    let liveCharactersInfo = "[";
    for(let i = 0; i < winner.length; ++i){
        liveCharactersInfo = liveCharactersInfo + winner[i].name + "[" + winner[i].health + "]";
    }
    liveCharactersInfo += "]";
    console.log("*************************Buttle ended*************************");
    if(winner === heroes){
        console.log("Heroes win!");
    }else{
        console.log("Villains win!");
    }
    console.log(liveCharactersInfo);
}

function startBattle(){

    if(heroes.length === 0){
        console.log(count);
        printWinnerInfo(villains);
        return;
    }
    else if(villains.length === 0){
        console.log(count);
        printWinnerInfo(heroes);
        return;
    }
    
    for(let i = 0; i < heroes.length; ++i){
        chooseRandomCharacterAndAttac(heroes[i], "hero");
        if(heroes[i]){
            setTimeout(chooseRandomCharacterAndAttac, 1/heroes[i].speed*5000, heroes[i], "hero");
        }
    }
    for(let i = 0; i < villains.length; ++i){
        chooseRandomCharacterAndAttac(villains[i], "villain");
        if(villains[i]){
            setTimeout(chooseRandomCharacterAndAttac, 1/villains[i].speed*5000, villains[i], "villain");
    }
}
   // Call start Battle recurcively till one of character arrayes will be empty
   startBattle();
}

startBattle();